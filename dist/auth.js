"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRefreshToken = exports.createAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.createAccessToken = (user) => {
    const payload = {
        userId: user.id,
    };
    const accessToken = jsonwebtoken_1.default.sign(payload, `${process.env.jwtAccessSecret}`, { expiresIn: "15m" });
    return accessToken;
};
exports.createRefreshToken = (user) => {
    const payload = {
        userId: user.id,
    };
    return jsonwebtoken_1.default.sign(payload, `${process.env.jwtRefreshSecret}`, { expiresIn: "15m" });
};
//# sourceMappingURL=auth.js.map