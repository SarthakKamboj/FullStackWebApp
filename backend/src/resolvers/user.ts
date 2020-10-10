import { EntityManager } from '@mikro-orm/postgresql';
import { User } from './../entities/User';
import bcrypt from 'bcrypt';
import { MyContext } from './../types';
import { Arg, Ctx, Field, InputType, Int, Mutation, ObjectType, Query, Resolver, UseMiddleware } from 'type-graphql';
import { createAccessToken, createRefreshToken, sendRefreshToken } from "../auth";
import { isAuth } from "../isAuth"

@InputType()
class UsernamePasswordInput {
	@Field(() => String)
	username: string;

	@Field(() => String)
	password: string;
}

@ObjectType()
class FieldError {
	  @Field(()=>String)
	  field: string;

	  @Field(()=>String)
	  message: string;
}

@ObjectType()
class RevokedRefreshTokenResponse {
	@Field(() => [FieldError], {nullable: true})
	errors?: FieldError[];

	@Field(() => Boolean)
	refreshTokenRevoked: boolean;
}

@ObjectType()
class UserResponse {
	@Field(() => [ FieldError ], { nullable: true })
	errors?: FieldError[];

	@Field(() => User, { nullable: true })
	user?: User;

	@Field(() => String, {nullable: true})
	accessToken?: string;
}

@Resolver()
export class UserResolver {
	@Query(() => [ User ])
	users(@Ctx() { em }: MyContext): Promise<User[]> {
		return em.find(User, {});
	}

	@Query(() => String)
	@UseMiddleware(isAuth)
	test_jwt(
		@Ctx() {payload}:MyContext
	):string {
		return `your user id is ${payload?.userId}`;
	}

	@Mutation(() => RevokedRefreshTokenResponse) 
	async revokeRefreshTokensForUser (
		@Arg("userId", () => Int) userId: number,
		@Ctx() {em}: MyContext
	): Promise<RevokedRefreshTokenResponse> {
		const user = await em.findOne(User,{id:userId})
		if (!user) { 
			return {
				refreshTokenRevoked: false,
		 		errors: [{field:"userId", message:"invalid userId"}]
			}
		}
		user.tokenVersion += 1;
		return {
			refreshTokenRevoked: true,
		}
	}

	@Mutation(() => UserResponse)
	async login(
		@Arg('options',()=>UsernamePasswordInput) options: UsernamePasswordInput,
		@Ctx() { em, res }: MyContext
	): Promise<UserResponse> {
		const user = await em.findOne(User, { username: options.username });
		if (!user) {
			return {
				errors: [
					{
						field: 'username',
						message: 'username does not exist'
					}
				]
			};
		}
		const correctPassword: boolean = await bcrypt.compare(options.password, user.password);
		if (!correctPassword) {
			return {
				errors: [
					{
						field: 'password',
						message: 'incorrect password'
					}
				]
			};
		}

		sendRefreshToken(res,createRefreshToken(user));
		return {
			user,
			accessToken: createAccessToken(user),
		} 
	}

	@Mutation(() => UserResponse)
	async register(
		@Arg('options', () => UsernamePasswordInput)
		options: UsernamePasswordInput,
		@Ctx() { em, res }: MyContext
	): Promise<UserResponse> {
		if (options.username.length <= 2) {
			return {
				errors: [
					{
						field: 'username',
						message: 'username is not long enoough'
					}
				]
			};
		}
		if (options.password.length <= 2) {
			return {
				errors: [
					{
						field: 'password',
						message: 'password is not long enough'
					}
				]
			};
		}
		const hashedPassword: string = await bcrypt.hash(options.password, 10);
		let user;
		try {
			const result = await (em as EntityManager).createQueryBuilder(User).getKnexQuery().insert({
				username: options.username, password: hashedPassword, created_at: new Date(), updated_at: new Date()
			}).returning("*")
			user = result[0];
		} catch(err) {
			console.log(err);
			if (err.code === "23505") {
				return {
					errors: [
						{
							field:"username", 
							message:"account with this username already exists"
						}
					]
				}
			}
		}
		sendRefreshToken(res,createRefreshToken(user));
		console.log(user.username);
		return {
			user,
			accessToken: createAccessToken(user),
		}
	}
}
