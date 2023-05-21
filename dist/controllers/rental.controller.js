"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RentalController = class RentalController {
    constructor(rentalRepository) {
        this.rentalRepository = rentalRepository;
    }
    async create(rental) {
        return this.rentalRepository.create(rental);
    }
    async count(where) {
        return this.rentalRepository.count(where);
    }
    async find(filter) {
        return this.rentalRepository.find(filter);
    }
    async updateAll(rental, where) {
        return this.rentalRepository.updateAll(rental, where);
    }
    async findById(id, filter) {
        return this.rentalRepository.findById(id, filter);
    }
    async updateById(id, rental) {
        await this.rentalRepository.updateById(id, rental);
    }
    async replaceById(id, rental) {
        await this.rentalRepository.replaceById(id, rental);
    }
    async deleteById(id) {
        await this.rentalRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/rentals'),
    (0, rest_1.response)(200, {
        description: 'Rental model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Rental) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rental, {
                    title: 'NewRental',
                    exclude: ['rentalId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RentalController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rentals/count'),
    (0, rest_1.response)(200, {
        description: 'Rental model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Rental)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RentalController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rentals'),
    (0, rest_1.response)(200, {
        description: 'Array of Rental model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Rental, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Rental)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RentalController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/rentals'),
    (0, rest_1.response)(200, {
        description: 'Rental PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rental, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Rental)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Rental, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RentalController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rentals/{id}'),
    (0, rest_1.response)(200, {
        description: 'Rental model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rental, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Rental, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RentalController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/rentals/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rental PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rental, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Rental]),
    tslib_1.__metadata("design:returntype", Promise)
], RentalController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/rentals/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rental PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Rental]),
    tslib_1.__metadata("design:returntype", Promise)
], RentalController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/rentals/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rental DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], RentalController.prototype, "deleteById", null);
RentalController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RentalRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RentalRepository])
], RentalController);
exports.RentalController = RentalController;
//# sourceMappingURL=rental.controller.js.map