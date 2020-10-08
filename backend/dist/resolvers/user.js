"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.UserResolver = void 0;
const User_1 = require("./../entities/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const type_graphql_1 = require("type-graphql");
const auth_1 = require("../auth");
const isAuth_1 = require("../isAuth");
let UsernamePasswordInput = class UsernamePasswordInput {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], UsernamePasswordInput.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], UsernamePasswordInput.prototype, "password", void 0);
UsernamePasswordInput = __decorate([
    type_graphql_1.InputType()
], UsernamePasswordInput);
let FieldError = class FieldError {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    type_graphql_1.ObjectType()
], FieldError);
let RevokedRefreshTokenResponse = class RevokedRefreshTokenResponse {
};
__decorate([
    type_graphql_1.Field(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], RevokedRefreshTokenResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    __metadata("design:type", Boolean)
], RevokedRefreshTokenResponse.prototype, "refreshTokenRevoked", void 0);
RevokedRefreshTokenResponse = __decorate([
    type_graphql_1.ObjectType()
], RevokedRefreshTokenResponse);
let UserResponse = class UserResponse {
};
__decorate([
    type_graphql_1.Field(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserResponse.prototype, "accessToken", void 0);
UserResponse = __decorate([
    type_graphql_1.ObjectType()
], UserResponse);
let UserResolver = class UserResolver {
    users({ em }) {
        return em.find(User_1.User, {});
    }
    test_jwt({ payload }) {
        return `your user id is ${payload === null || payload === void 0 ? void 0 : payload.userId}`;
    }
    revokeRefreshTokensForUser(userId, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield em.findOne(User_1.User, { id: userId });
            if (!user) {
                return {
                    refreshTokenRevoked: false,
                    errors: [{ field: "userId", message: "invalid userId" }]
                };
            }
            user.tokenVersion += 1;
            return {
                refreshTokenRevoked: true,
            };
        });
    }
    login(options, { em, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield em.findOne(User_1.User, { username: options.username });
            if (!user) {
                return {
                    errors: [
                        {
                            field: 'username',
                            message: 'username does not exist'
                        }
                    ]
                };
            }
            const correctPassword = yield bcrypt_1.default.compare(options.password, user.password);
            if (!correctPassword) {
                return {
                    errors: [
                        {
                            field: 'password',
                            message: 'incorrect password'
                        }
                    ]
                };
            }
            auth_1.sendRefreshToken(res, auth_1.createRefreshToken(user));
            return {
                user,
                accessToken: auth_1.createAccessToken(user),
            };
        });
    }
    register(options, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options.username.length <= 2) {
                return {
                    errors: [
                        {
                            field: 'username',
                            message: 'username is not long enoough'
                        }
                    ]
                };
            }
            if (options.password.length <= 2) {
                return {
                    errors: [
                        {
                            field: 'password',
                            message: 'password is not long enough'
                        }
                    ]
                };
            }
            const hashedPassword = yield bcrypt_1.default.hash(options.password, 10);
            const user = em.create(User_1.User, { username: options.username, password: hashedPassword });
            try {
                yield em.persistAndFlush(user);
            }
            catch (err) {
<<<<<<< HEAD:dist/resolvers/user.js
                if (err.name === 'UniqueConstraintViolationException') {
                    return {
                        errors: [{ field: 'username', message: 'a user with this username already exists' }]
                    };
                }
            }
            return { user };
=======
                if (err.code === "23505") {
                    return {
                        errors: [
                            {
                                field: "username",
                                message: "account with this username already exists"
                            }
                        ]
                    };
                }
            }
            return {
                user
            };
>>>>>>> 6d7387bb5ef62e91343fde8213a2893d4906b4d9:backend/dist/resolvers/user.js
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [User_1.User]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    type_graphql_1.Query(() => String),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], UserResolver.prototype, "test_jwt", null);
__decorate([
    type_graphql_1.Mutation(() => RevokedRefreshTokenResponse),
    __param(0, type_graphql_1.Arg("userId", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "revokeRefreshTokensForUser", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Arg('options', () => UsernamePasswordInput)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsernamePasswordInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Mutation(() => UserResponse),
    __param(0, type_graphql_1.Arg('options', () => UsernamePasswordInput)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsernamePasswordInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map