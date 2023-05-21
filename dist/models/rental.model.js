"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rental = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Rental = class Rental extends repository_1.Entity {
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
], Rental.prototype, "rentalId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Rental.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Rental.prototype, "bikeId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Rental.prototype, "startTime", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Rental.prototype, "endTime", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
    }),
    tslib_1.__metadata("design:type", Boolean)
], Rental.prototype, "status", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Rental.prototype, "revenueId", void 0);
Rental = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: true } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Rental);
exports.Rental = Rental;
//# sourceMappingURL=rental.model.js.map