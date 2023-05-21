"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
const tslib_1 = require("tslib");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const util_1 = require("util");
const jwt = require('jsonwebtoken');
const signAsync = (0, util_1.promisify)(jwt.sign);
const verifyAsync = (0, util_1.promisify)(jwt.verify);
let JWTService = class JWTService {
    constructor(jwtSecret, jwtExpiresIn) {
        this.jwtSecret = jwtSecret;
        this.jwtExpiresIn = jwtExpiresIn;
    }
    async verifyToken(token) {
        if (!token) {
            throw new rest_1.HttpErrors.Unauthorized(`Error verifying token : 'token' is null`);
        }
        let userProfile;
        try {
            // decode user profile from token
            const decodedToken = await verifyAsync(token, this.jwtSecret);
            userProfile = Object.assign({ [security_1.securityId]: '', name: '' }, {
                [security_1.securityId]: decodedToken.id,
                name: decodedToken.name,
                id: decodedToken.id,
                email: decodedToken.email,
                roles: decodedToken.roles
            });
        }
        catch (error) {
            throw new rest_1.HttpErrors.Unauthorized(`Error verifying token : ${error.message}`);
        }
        return userProfile;
    }
    async generateToken(userProfile) {
        if (!userProfile) {
            throw new rest_1.HttpErrors.Unauthorized('Error generating token : userProfile is null');
        }
        const userInfoForToken = {
            id: userProfile[security_1.securityId],
            name: userProfile.name,
            email: userProfile.email,
            roles: userProfile.roles,
        };
        // Generate a JSON Web Token
        let token;
        try {
            token = await signAsync(userInfoForToken, this.jwtSecret, {
                expiresIn: Number(this.jwtExpiresIn),
            });
        }
        catch (error) {
            throw new rest_1.HttpErrors.Unauthorized(`Error encoding token : ${error}`);
        }
        return token;
    }
};
JWTService = tslib_1.__decorate([
    tslib_1.__param(0, (0, context_1.inject)(authentication_jwt_1.TokenServiceBindings.TOKEN_SECRET)),
    tslib_1.__param(1, (0, context_1.inject)(authentication_jwt_1.TokenServiceBindings.TOKEN_EXPIRES_IN)),
    tslib_1.__metadata("design:paramtypes", [String, String])
], JWTService);
exports.JWTService = JWTService;
//# sourceMappingURL=jwt.service.js.map