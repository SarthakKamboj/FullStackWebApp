import { User } from './entities/User';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

require('dotenv').config();

export default {
	migrations: {
		path: path.join(__dirname, './migrations'), // path to the folder with migrations
		pattern: /^[\w-]+\d+\.[tj]s$/
	},
	entities: [ Post, User ],
	dbName: process.env.dbName,
	password: process.env.password,
	type: process.env.type,
	debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];
