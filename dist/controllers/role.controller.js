"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RoleController = class RoleController {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async create(role) {
        return this.roleRepository.create(role);
    }
    async count(where) {
        return this.roleRepository.count(where);
    }
    async find(filter) {
        return this.roleRepository.find(filter);
    }
    async updateAll(role, where) {
        return this.roleRepository.updateAll(role, where);
    }
    async findById(id, filter) {
        return this.roleRepository.findById(id, filter);
    }
    async updateById(id, role) {
        await this.roleRepository.updateById(id, role);
    }
    async replaceById(id, role) {
        await this.roleRepository.replaceById(id, role);
    }
    async deleteById(id) {
        await this.roleRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/roles'),
    (0, rest_1.response)(200, {
        description: 'Role model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Role) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Role, {
                    title: 'NewRole',
                    exclude: ['roleId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/roles/count'),
    (0, rest_1.response)(200, {
        description: 'Role model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Role)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/roles'),
    (0, rest_1.response)(200, {
        description: 'Array of Role model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Role, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Role)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/roles'),
    (0, rest_1.response)(200, {
        description: 'Role PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Role, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Role)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Role, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/roles/{id}'),
    (0, rest_1.response)(200, {
        description: 'Role model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Role, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Role, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/roles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Role PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Role, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Role]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/roles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Role PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Role]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/roles/{id}'),
    (0, rest_1.response)(204, {
        description: 'Role DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "deleteById", null);
RoleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RoleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RoleRepository])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map