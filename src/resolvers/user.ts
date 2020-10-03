import { MyContext } from './../types';
import { Arg, Ctx, Field, InputType, Mutation, Resolver } from 'type-graphql';
import { User } from 'src/entities/User';

@InputType()
class UsernamePasswordInput {
	@Field(() => String)
	username: string;

	@Field(() => String)
	password: string;
}

@Resolver()
export class UserResolver {
	@Mutation(() => User)
	async register(
		@Arg('options', () => UsernamePasswordInput)
		options: UsernamePasswordInput,
		@Ctx() { em }: MyContext
	): Promise<User> {
		const user = em.create(User, { username: options.username, password: options.password });
		await em.persistAndFlush(user);
		return user;
	}
}
