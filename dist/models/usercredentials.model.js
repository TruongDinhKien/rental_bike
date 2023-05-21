"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCredentials = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const users_model_1 = require("./users.model");
let UserCredentials = class UserCredentials extends repository_1.Entity {
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
], UserCredentials.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserCredentials.prototype, "password", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => users_model_1.Users),
    tslib_1.__metadata("design:type", String)
], UserCredentials.prototype, "userId", void 0);
UserCredentials = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserCredentials);
exports.UserCredentials = UserCredentials;
//# sourceMappingURL=usercredentials.model.js.map