"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRefreshToken = exports.createRefreshToken = exports.createAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.createAccessToken = (user) => {
    const payload = {
        userId: user.id,
    };
    const accessToken = jsonwebtoken_1.default.sign(payload, `${process.env.jwtAccessSecret}`, { expiresIn: "15m" });
    return accessToken;
};
exports.createRefreshToken = (user) => {
    console.log(user);
    const payload = {
        userId: user.id,
        tokenVersion: user.token_version,
    };
    console.log(payload);
    console.log(process.env.jwtRefreshSecret);
    return jsonwebtoken_1.default.sign(payload, process.env.jwtRefreshSecret, { expiresIn: "7d" });
};
exports.sendRefreshToken = (res, token) => {
    res.cookie("jid", token, { httpOnly: true });
};
//# sourceMappingURL=auth.js.map