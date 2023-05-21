"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeBikestatusController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BikeBikestatusController = class BikeBikestatusController {
    constructor(bikeRepository) {
        this.bikeRepository = bikeRepository;
    }
    async getBikestatus(id) {
        return this.bikeRepository.bikestatus(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/bikes/{id}/bikestatus', {
        responses: {
            '200': {
                description: 'Bikestatus belonging to Bike',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Bikestatus),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BikeBikestatusController.prototype, "getBikestatus", null);
BikeBikestatusController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.BikeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BikeRepository])
], BikeBikestatusController);
exports.BikeBikestatusController = BikeBikestatusController;
//# sourceMappingURL=bike-bikestatus.controller.js.map