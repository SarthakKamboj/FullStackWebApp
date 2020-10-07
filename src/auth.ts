import { User } from "./entities/User";
import jwt from "jsonwebtoken"

export const createAccessToken = (user: User): string => {
    const payload = {
        userId: user.id,
    }

    const accessToken:string = jwt.sign(payload,`${process.env.jwtAccessSecret}`,{expiresIn: "15m"});

    return accessToken;
}

export const createRefreshToken = (user: User): string => {
    const payload = {
        userId: user.id,
    }

    return jwt.sign(payload,`${process.env.jwtRefreshSecret}`,{expiresIn: "15m"});

}