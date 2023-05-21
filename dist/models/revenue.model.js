"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revenue = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rental_model_1 = require("./rental.model");
let Revenue = class Revenue extends repository_1.Entity {
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
], Revenue.prototype, "revenueId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Revenue.prototype, "rentalId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Revenue.prototype, "amount", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Revenue.prototype, "date", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => rental_model_1.Rental),
    tslib_1.__metadata("design:type", rental_model_1.Rental)
], Revenue.prototype, "rental", void 0);
Revenue = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: true } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Revenue);
exports.Revenue = Revenue;
//# sourceMappingURL=revenue.model.js.map