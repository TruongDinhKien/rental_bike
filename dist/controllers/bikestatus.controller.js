"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikestatusController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BikestatusController = class BikestatusController {
    constructor(bikestatusRepository) {
        this.bikestatusRepository = bikestatusRepository;
    }
    async create(bikestatus) {
        return this.bikestatusRepository.create(bikestatus);
    }
    async count(where) {
        return this.bikestatusRepository.count(where);
    }
    async find(filter) {
        return this.bikestatusRepository.find(filter);
    }
    async updateAll(bikestatus, where) {
        return this.bikestatusRepository.updateAll(bikestatus, where);
    }
    async findById(id, filter) {
        return this.bikestatusRepository.findById(id, filter);
    }
    async updateById(id, bikestatus) {
        await this.bikestatusRepository.updateById(id, bikestatus);
    }
    async replaceById(id, bikestatus) {
        await this.bikestatusRepository.replaceById(id, bikestatus);
    }
    async deleteById(id) {
        await this.bikestatusRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/bikestatuses'),
    (0, rest_1.response)(200, {
        description: 'Bikestatus model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Bikestatus) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bikestatus, {
                    title: 'NewBikestatus',
                    exclude: ['bikeStatusId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikestatusController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/bikestatuses/count'),
    (0, rest_1.response)(200, {
        description: 'Bikestatus model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Bikestatus)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikestatusController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/bikestatuses'),
    (0, rest_1.response)(200, {
        description: 'Array of Bikestatus model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Bikestatus, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Bikestatus)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikestatusController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/bikestatuses'),
    (0, rest_1.response)(200, {
        description: 'Bikestatus PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bikestatus, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Bikestatus)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Bikestatus, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikestatusController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/bikestatuses/{id}'),
    (0, rest_1.response)(200, {
        description: 'Bikestatus model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bikestatus, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Bikestatus, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikestatusController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/bikestatuses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Bikestatus PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bikestatus, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Bikestatus]),
    tslib_1.__metadata("design:returntype", Promise)
], BikestatusController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/bikestatuses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Bikestatus PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Bikestatus]),
    tslib_1.__metadata("design:returntype", Promise)
], BikestatusController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/bikestatuses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Bikestatus DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], BikestatusController.prototype, "deleteById", null);
BikestatusController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.BikestatusRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BikestatusRepository])
], BikestatusController);
exports.BikestatusController = BikestatusController;
//# sourceMappingURL=bikestatus.controller.js.map