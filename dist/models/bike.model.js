"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const bikestatus_model_1 = require("./bikestatus.model");
const rental_model_1 = require("./rental.model");
let Bike = class Bike extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Bike.prototype, "bikeId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Bike.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Bike.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Bike.prototype, "imgUrl", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => bikestatus_model_1.Bikestatus),
    tslib_1.__metadata("design:type", Number)
], Bike.prototype, "bikestatusId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => rental_model_1.Rental, { keyTo: 'bikeId' }),
    tslib_1.__metadata("design:type", Array)
], Bike.prototype, "rentals", void 0);
Bike = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Bike);
exports.Bike = Bike;
//# sourceMappingURL=bike.model.js.map