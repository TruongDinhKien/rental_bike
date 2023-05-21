"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRentalController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BikeRentalController = class BikeRentalController {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async find(id, filter) {
        return this.bikeRepository.rentals(id).find(filter);
    }
    async create(id, rental) {
        return this.bikeRepository.rentals(id).create(rental);
    }
    async patch(id, rental, where) {
        return this.bikeRepository.rentals(id).patch(rental, where);
    }
    async delete(id, where) {
        return this.bikeRepository.rentals(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/bikes/{id}/rentals', {
        responses: {
            '200': {
                description: 'Array of Bike has many Rental',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Rental) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeRentalController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/bikes/{id}/rentals', {
        responses: {
            '200': {
                description: 'Bike model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Rental) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rental, {
                    title: 'NewRentalInBike',
                    exclude: ['rentalId'],
                    optional: ['bikeId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeRentalController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/bikes/{id}/rentals', {
        responses: {
            '200': {
                description: 'Bike.Rental PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rental, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Rental))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeRentalController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/bikes/{id}/rentals', {
        responses: {
            '200': {
                description: 'Bike.Rental DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Rental))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeRentalController.prototype, "delete", null);
BikeRentalController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.BikeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BikeRepository])
], BikeRentalController);
exports.BikeRentalController = BikeRentalController;
//# sourceMappingURL=bike-rental.controller.js.map