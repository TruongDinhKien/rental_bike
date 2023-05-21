"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bikestatus = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Bikestatus = class Bikestatus extends repository_1.Entity {
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
], Bikestatus.prototype, "bikeStatusId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Bikestatus.prototype, "name", void 0);
Bikestatus = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: true } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Bikestatus);
exports.Bikestatus = Bikestatus;
//# sourceMappingURL=bikestatus.model.js.map