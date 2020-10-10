"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./resolvers/user");
require("reflect-metadata");
const cars_1 = require("./resolvers/cars");
const posts_1 = require("./resolvers/posts");
const hello_1 = require("./resolvers/hello");
const express_1 = __importDefault(require("express"));
const core_1 = require("@mikro-orm/core");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("./entities/User");
const auth_1 = require("./auth");
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const orm = yield core_1.MikroORM.init(mikro_orm_config_1.default);
    const app = express_1.default();
    app.use(cors_1.default({
        origin: "http://localhost:3000",
        credentials: true
    }));
    app.use(cookie_parser_1.default());
    app.post("/refresh_token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const refreshToken = req.cookies.jid;
        if (!refreshToken) {
            res.sendStatus(400);
        }
        let payload = null;
        try {
            payload = jsonwebtoken_1.default.verify(refreshToken, process.env.jwtRefreshSecret);
        }
        catch (err) {
            console.log("error caused by refresh token");
            console.log(err);
            return res.send({ ok: false, accessToken: "" });
        }
        const user = yield orm.em.findOne(User_1.User, { id: payload.userId });
        if (!user) {
            return res.send({ ok: false, accessToken: "" });
        }
        if (user.tokenVersion !== payload.tokenVersion) {
            return res.send({ ok: false, accessToken: "" });
        }
        auth_1.sendRefreshToken(res, auth_1.createRefreshToken(user));
        return res.send({ ok: true, accessToken: auth_1.createAccessToken(user) });
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [hello_1.HelloResolver, posts_1.PostResolver, cars_1.CarResolver, user_1.UserResolver],
            validate: false
        }),
        context: ({ req, res }) => ({ req, res, em: orm.em })
    });
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(process.env.PORT, () => {
        console.log(`listening on PORT ${process.env.PORT}`);
    });
});
main().catch((error) => console.log(error));
//# sourceMappingURL=index.js.map