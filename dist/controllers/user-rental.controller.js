"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRentalController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserRentalController = class UserRentalController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async find(id, filter) {
        return this.userRepository.rentals(id).find(filter);
    }
    async create(id, rental) {
        return this.userRepository.rentals(id).create(rental);
    }
    async patch(id, rental, where) {
        return this.userRepository.rentals(id).patch(rental, where);
    }
    async delete(id, where) {
        return this.userRepository.rentals(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/users/{id}/rentals', {
        responses: {
            '200': {
                description: 'Array of User has many Rental',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Rental) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRentalController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/users/{id}/rentals', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Rental) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rental, {
                    title: 'NewRentalInUser',
                    exclude: ['rentalId'],
                    optional: ['id']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRentalController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/users/{id}/rentals', {
        responses: {
            '200': {
                description: 'Users.Rental PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rental, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Rental))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRentalController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/users/{id}/rentals', {
        responses: {
            '200': {
                description: 'Users.Rental DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Rental))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRentalController.prototype, "delete", null);
UserRentalController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserRentalController);
exports.UserRentalController = UserRentalController;
//# sourceMappingURL=user-rental.controller.js.map