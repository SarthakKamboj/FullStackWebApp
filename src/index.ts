import { UserResolver } from './resolvers/user';
import 'reflect-metadata';
import { CarResolver } from './resolvers/cars';
import { PostResolver } from './resolvers/posts';
import { HelloResolver } from './resolvers/hello';
import express from 'express';
import { __prod__ } from './constants';
import { MikroORM } from '@mikro-orm/core';
import microConfig from './mikro-orm.config';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
require("dotenv").config()

const main = async () => {
	const orm = await MikroORM.init(microConfig);
	orm.getMigrator().up();

	const app = express();

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [ HelloResolver, PostResolver, CarResolver, UserResolver ],
			validate: false
		}),
		context: () => ({ em: orm.em })
	});

	apolloServer.applyMiddleware({ app });

	app.listen(process.env.PORT, () => {
		console.log(`listening on PORT ${process.env.PORT}`);
	});
};

main().catch((error) => console.log(error));
