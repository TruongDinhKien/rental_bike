"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RevenueController = class RevenueController {
    constructor(revenueRepository) {
        this.revenueRepository = revenueRepository;
    }
    async create(revenue) {
        return this.revenueRepository.create(revenue);
    }
    async count(where) {
        return this.revenueRepository.count(where);
    }
    async find(filter) {
        return this.revenueRepository.find(filter);
    }
    async updateAll(revenue, where) {
        return this.revenueRepository.updateAll(revenue, where);
    }
    async findById(id, filter) {
        return this.revenueRepository.findById(id, filter);
    }
    async updateById(id, revenue) {
        await this.revenueRepository.updateById(id, revenue);
    }
    async replaceById(id, revenue) {
        await this.revenueRepository.replaceById(id, revenue);
    }
    async deleteById(id) {
        await this.revenueRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/revenues'),
    (0, rest_1.response)(200, {
        description: 'Revenue model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Revenue) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Revenue, {
                    title: 'NewRevenue',
                    exclude: ['revenueId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RevenueController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/revenues/count'),
    (0, rest_1.response)(200, {
        description: 'Revenue model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Revenue)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RevenueController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/revenues'),
    (0, rest_1.response)(200, {
        description: 'Array of Revenue model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Revenue, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Revenue)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RevenueController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/revenues'),
    (0, rest_1.response)(200, {
        description: 'Revenue PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Revenue, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Revenue)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Revenue, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RevenueController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/revenues/{id}'),
    (0, rest_1.response)(200, {
        description: 'Revenue model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Revenue, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Revenue, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RevenueController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/revenues/{id}'),
    (0, rest_1.response)(204, {
        description: 'Revenue PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Revenue, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Revenue]),
    tslib_1.__metadata("design:returntype", Promise)
], RevenueController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/revenues/{id}'),
    (0, rest_1.response)(204, {
        description: 'Revenue PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Revenue]),
    tslib_1.__metadata("design:returntype", Promise)
], RevenueController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/revenues/{id}'),
    (0, rest_1.response)(204, {
        description: 'Revenue DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], RevenueController.prototype, "deleteById", null);
RevenueController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RevenueRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RevenueRepository])
], RevenueController);
exports.RevenueController = RevenueController;
//# sourceMappingURL=revenue.controller.js.map