"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BikeController = class BikeController {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async create(bike) {
        return this.bikeRepository.create(bike);
    }
    async count(where) {
        return this.bikeRepository.count(where);
    }
    async find(filter) {
        return this.bikeRepository.find(filter);
    }
    async updateAll(bike, where) {
        return this.bikeRepository.updateAll(bike, where);
    }
    async findById(id, filter) {
        return this.bikeRepository.findById(id, filter);
    }
    async updateById(id, bike) {
        await this.bikeRepository.updateById(id, bike);
    }
    async replaceById(id, bike) {
        await this.bikeRepository.replaceById(id, bike);
    }
    async deleteById(id) {
        await this.bikeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/bikes'),
    (0, rest_1.response)(200, {
        description: 'Bike model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Bike) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bike, {
                    title: 'NewBike',
                    exclude: ['bikeId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/bikes/count'),
    (0, rest_1.response)(200, {
        description: 'Bike model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Bike)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/bikes'),
    (0, rest_1.response)(200, {
        description: 'Array of Bike model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Bike, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Bike)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/bikes'),
    (0, rest_1.response)(200, {
        description: 'Bike PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bike, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Bike)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Bike, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/bikes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Bike model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bike, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Bike, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/bikes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Bike PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bike, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Bike]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/bikes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Bike PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Bike]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/bikes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Bike DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeController.prototype, "deleteById", null);
BikeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.BikeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BikeRepository])
], BikeController);
exports.BikeController = BikeController;
//# sourceMappingURL=bike.controller.js.map