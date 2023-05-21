"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueRentalController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RevenueRentalController = class RevenueRentalController {
    constructor(revenueRepository) {
        this.revenueRepository = revenueRepository;
    }
    async get(id, filter) {
        return this.revenueRepository.rental(id).get(filter);
    }
    async create(id, rental) {
        return this.revenueRepository.rental(id).create(rental);
    }
    async patch(id, rental, where) {
        return this.revenueRepository.rental(id).patch(rental, where);
    }
    async delete(id, where) {
        return this.revenueRepository.rental(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/revenues/{id}/rental', {
        responses: {
            '200': {
                description: 'Revenue has one Rental',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Rental),
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
], RevenueRentalController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/revenues/{id}/rental', {
        responses: {
            '200': {
                description: 'Revenue model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Rental) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rental, {
                    title: 'NewRentalInRevenue',
                    exclude: ['rentalId'],
                    optional: ['revenueId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RevenueRentalController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/revenues/{id}/rental', {
        responses: {
            '200': {
                description: 'Revenue.Rental PATCH success count',
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
], RevenueRentalController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/revenues/{id}/rental', {
        responses: {
            '200': {
                description: 'Revenue.Rental DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Rental))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RevenueRentalController.prototype, "delete", null);
RevenueRentalController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RevenueRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RevenueRepository])
], RevenueRentalController);
exports.RevenueRentalController = RevenueRentalController;
//# sourceMappingURL=revenue-rental.controller.js.map