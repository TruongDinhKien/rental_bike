"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = exports.CredentialsRequestBody = exports.NewUserRequest = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
const keys_1 = require("../keys");
const core_1 = require("@loopback/core");
const security_1 = require("@loopback/security");
const services_1 = require("../services");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const bcryptjs_1 = require("bcryptjs");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
let NewUserRequest = class NewUserRequest extends models_1.Users {
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], NewUserRequest.prototype, "password", void 0);
NewUserRequest = tslib_1.__decorate([
    (0, repository_1.model)()
], NewUserRequest);
exports.NewUserRequest = NewUserRequest;
const CredentialsSchema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
        email: {
            type: 'string',
            format: 'email',
        },
        password: {
            type: 'string',
            minLength: 5,
        },
    },
};
exports.CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
        'application/json': { schema: CredentialsSchema },
    },
};
const newUserRequestDefaultRole = async (invocationCtx, next) => {
    if (invocationCtx.args[0])
        invocationCtx.args[0].roleId = 0;
    const result = await next();
    return result;
};
let AuthController = class AuthController {
    constructor(jwtService, userService, user, userRepository, passwordHasher) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.user = user;
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }
    async create(user) {
        return this.userRepository.create(user);
    }
    async count(where) {
        return this.userRepository.count(where);
    }
    async find(filter) {
        return this.userRepository.find(filter);
    }
    async updateAll(users, where) {
        return this.userRepository.updateAll(users, where);
    }
    async findById(id, filter) {
        return this.userRepository.findById(id, filter);
    }
    async updateById(id, users) {
        await this.userRepository.updateById(id, users);
    }
    async replaceById(id, users) {
        await this.userRepository.replaceById(id, users);
    }
    async deleteById(id) {
        await this.userRepository.deleteById(id);
    }
    async login(credentials) {
        // ensure the user exists, and the password is correct
        const user = await this.userService.verifyCredentials(credentials);
        // convert a User object into a UserProfile object (reduced set of properties)
        const userProfile = this.userService.convertToUserProfile(user);
        // create a JSON Web Token based on the user profile
        const token = await this.jwtService.generateToken(userProfile);
        return { token };
    }
    async whoAmI(currentUserProfile) {
        return currentUserProfile;
    }
    async signUp(newUserRequest) {
        const existEmailError = 'Email already exists';
        // if email already exists
        const user = await this.userRepository.find({
            where: { email: newUserRequest.email },
        });
        if (user.length > 0)
            throw new rest_1.HttpErrors.Forbidden(existEmailError);
        const password = await (0, bcryptjs_1.hash)(newUserRequest.password, await (0, bcryptjs_1.genSalt)());
        const savedUser = await this.userRepository.create(lodash_1.default.omit(newUserRequest, 'password'));
        await this.userRepository.userCredentials(savedUser.id).create({ password });
        return savedUser;
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/users'),
    (0, rest_1.response)(200, {
        description: 'User model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Users) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, {
                    title: 'NewUser',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/users/count'),
    (0, rest_1.response)(200, {
        description: 'User model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Users)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/users'),
    (0, rest_1.response)(200, {
        description: 'Array of User model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Users, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Users)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/users'),
    (0, rest_1.response)(200, {
        description: 'User PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Users)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Users, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/users/{id}'),
    (0, rest_1.response)(200, {
        description: 'User model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Users, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/users/{id}'),
    (0, rest_1.response)(204, {
        description: 'User PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Users, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Users]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/users/{id}'),
    (0, rest_1.response)(204, {
        description: 'User PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Users]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/users/{id}'),
    (0, rest_1.response)(204, {
        description: 'User DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.post)('/users/login', {
        responses: {
            '200': {
                description: 'Token',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                token: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)(exports.CredentialsRequestBody)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/whoAmI', {
        responses: {
            '200': {
                description: 'Return current user',
                content: {
                    'application/json': {
                        schema: {
                            type: 'string',
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, core_1.inject)(security_1.SecurityBindings.USER)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "whoAmI", null);
tslib_1.__decorate([
    (0, core_1.intercept)(newUserRequestDefaultRole),
    (0, rest_1.post)('/signup', {
        responses: {
            '200': {
                description: 'User',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': NewUserRequest,
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(NewUserRequest, {
                    title: 'Create new account',
                    exclude: ['id', 'roleId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
AuthController = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(authentication_jwt_1.TokenServiceBindings.TOKEN_SERVICE)),
    tslib_1.__param(1, (0, core_1.inject)(keys_1.UserServiceBindings.USER_SERVICE)),
    tslib_1.__param(2, (0, core_1.inject)(security_1.SecurityBindings.USER, { optional: true })),
    tslib_1.__param(3, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__param(4, (0, core_1.inject)(keys_1.PasswordHasherBindings.PASSWORD_HASHER)),
    tslib_1.__metadata("design:paramtypes", [services_1.JWTService, Object, Object, repositories_1.UserRepository, Object])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth-controller.controller.js.map