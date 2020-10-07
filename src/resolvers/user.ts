import { User } from './../entities/User';
import bcrypt from 'bcrypt';
import { MyContext } from './../types';
import { Arg, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver, UseMiddleware } from 'type-graphql';
import { createAccessToken, createRefreshToken } from "../auth";
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
class UserResponse {
	@Field(() => [FieldError], { nullable: true })
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

	@Mutation(() => UserResponse)
	async login(
		@Arg('options',()=>UsernamePasswordInput) options: UsernamePasswordInput,
		@Ctx() { em, res }: MyContext
	): Promise<UserResponse> {
		const user = await em.findOne(User, { username:options.username });
		if (!user) {
			return {
				errors: [{
					field: "username",
					message: "username does not exist" 
				}]
			} 
		}
		const correctPassword: boolean = await bcrypt.compare(options.password, user.password);
		if (!correctPassword) {
			return {
				errors: [{
					field: "password",
					message:"incorrect password"
				}]
			}
		}

		res.cookie("jid",createRefreshToken(user), {httpOnly:true});

		return {
			user,
			accessToken: createAccessToken(user),
		} 
	}

	@Mutation(() => UserResponse)
	async register(
		@Arg('options', () => UsernamePasswordInput)
		options: UsernamePasswordInput,
		@Ctx() { em }: MyContext
	): Promise<UserResponse> {
		if (options.username.length  <= 2) {
			return {
				errors: [{
					field: "username",
					message: "username is not long enoough"
				}]
			}
		}
		if (options.password.length <= 2) {
			return {
				errors: [{
					field: "password",
					message: "password is not long enough"
				}]
			}
		}
		const hashedPassword: string = await bcrypt.hash(options.password, 10);
		const user = em.create(User, { username: options.username, password: hashedPassword });
		try {
			await em.persistAndFlush(user);
		} catch(err) {
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
		return {
			user
		}
	}
}
