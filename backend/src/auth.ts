import { User } from "./entities/User";
import jwt from "jsonwebtoken"
import e from "express";

export const createAccessToken = (user: User): string => {
    const payload = {
        userId: user.id,
    }

    const accessToken:string = jwt.sign(payload,`${process.env.jwtAccessSecret}`,{expiresIn: "15m"});

    return accessToken;
}

export const createRefreshToken = (user: User): string => {
    console.log(user);
    const payload = {
        userId: user.id,
        // @ts-ignore
        tokenVersion: user.token_version,
    }

    console.log(payload)

    console.log(process.env.jwtRefreshSecret!);
    return jwt.sign(payload,process.env.jwtRefreshSecret!,{expiresIn: "7d"});
}

export const sendRefreshToken = (res:e.Response, token: string) => {
    res.cookie("jid",token, {httpOnly:true})
}