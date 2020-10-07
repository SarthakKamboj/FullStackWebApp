require("dotenv").config();
import jwt from "jsonwebtoken";
import { MiddlewareFn } from "type-graphql/dist/interfaces/Middleware";
import { MyContext } from "./types";

export const isAuth:MiddlewareFn<MyContext> = ({context}, next) => {
    const authorization = context.req.headers.authorization;  
    if (!authorization) {
        throw new Error("not authenticated")
    }

    try {
        const token = authorization.split(" ")[1];
        const payload = jwt.verify(token,process.env.jwtAccessSecret!);
        context.payload = payload as any; 
    } catch(err) {
        console.log(err)
        throw new Error("not authenticated");
    }
    return next();
}