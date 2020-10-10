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
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { User } from './entities/User';
import { createAccessToken, createRefreshToken, sendRefreshToken } from './auth';
import cors from "cors";
// import redis from "redis";
// import session from "express-session";
// import connectRedis from "connect-redis";

require("dotenv").config()

const main = async () => {
	const orm = await MikroORM.init(microConfig);
	// orm.getMigrator().up();

	const app = express();

	app.use(
		cors({
			origin: "http://localhost:3000",
			credentials: true
		})
	)
	// app.use((req,_,next)=> {
	// 	console.log("cookies");
	// 	console.log(req.cookies);
	// 	next();
	// })
	app.use(cookieParser());

	// const RedisStore = connectRedis(session);
	// const redisClient = redis.createClient();

	// app.use(
	// 	session({
	// 		name:"qid",
	// 		store: new RedisStore({client:redisClient, disableTouch:true}),
	// 		cookie: {
	// 			maxAge: 1000 * 60 * 24,
	// 		},
	// 		secret: `${process.env.redisSecret}`,
	// 		resave:false,
	// 	})
	// )

	app.post("/refresh_token",async (req,res) => {
		console.log(req.cookies);
		const refreshToken =  req.cookies.jid;
		if (!refreshToken) {
			res.send({"error": "refreshToken not included"}).sendStatus(400);
		}
		let payload:any = null;
		console.log(refreshToken);
		try {
			payload = jwt.verify(refreshToken,process.env.jwtRefreshSecret!);
		} catch (err) {
			return res.send({ok:false,accessToken:"refresh token not valid"})
		}
		const user:User | null = await orm.em.findOne(User,{id: payload.userId});
		
		if (!user) {
			return res.send({ok:false,accessToken:"",error:"user does not exist"})
		}

		if (user.tokenVersion !== payload.tokenVersion) {
			console.log("user token version "+user.tokenVersion)
			console.log("payload token version "+ payload.tokenVersion)

			return res.send({ok:false,accessToken:"",error: "token version not valid"})
		}

		sendRefreshToken(res,createRefreshToken(user));

		return res.send({ok:true,accessToken: createAccessToken(user)})
	})

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [ HelloResolver, PostResolver, CarResolver, UserResolver ],
			validate: false
		}),
		context: ({req,res}) => ({ req, res, em: orm.em })
	});

	apolloServer.applyMiddleware({ app, cors: false });

	app.listen(process.env.PORT, () => {
		console.log(`listening on PORT ${process.env.PORT}`);
	});
};

main().catch((error) => console.log(error));
