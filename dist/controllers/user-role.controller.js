"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserRoleController = class UserRoleController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getRole(id) {
        return this.userRepository.role(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/users/{id}/role', {
        responses: {
            '200': {
                description: 'Role belonging to User',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Role),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "getRole", null);
UserRoleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserRoleController);
exports.UserRoleController = UserRoleController;
//# sourceMappingURL=user-role.controller.js.map