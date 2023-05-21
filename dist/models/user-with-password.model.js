"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWithPassword = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const users_model_1 = require("./users.model");
let UserWithPassword = class UserWithPassword extends users_model_1.Users {
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserWithPassword.prototype, "password", void 0);
UserWithPassword = tslib_1.__decorate([
    (0, repository_1.model)()
], UserWithPassword);
exports.UserWithPassword = UserWithPassword;
//# sourceMappingURL=user-with-password.model.js.map