"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
require("dotenv").config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.isAuth = ({ context }, next) => {
    const authorization = context.req.headers.authorization;
    if (!authorization) {
        throw new Error("not authenticated");
    }
    try {
        const token = authorization.split(" ")[1];
        const payload = jsonwebtoken_1.default.verify(token, process.env.jwtAccessSecret);
        context.payload = payload;
    }
    catch (err) {
        console.log(err);
        throw new Error("not authenticated");
    }
    return next();
};
//# sourceMappingURL=isAuth.js.map