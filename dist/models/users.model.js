"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const role_model_1 = require("./role.model");
const rental_model_1 = require("./rental.model");
// import { UserCredentials } from '@loopback/authentication-jwt';
const usercredentials_model_1 = require("./usercredentials.model");
let Users = class Users extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        defaultFn: 'uuidv4',
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => usercredentials_model_1.UserCredentials, { keyFrom: 'id', keyTo: 'userId' }),
    tslib_1.__metadata("design:type", usercredentials_model_1.UserCredentials)
], Users.prototype, "userCredentials", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Users.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => role_model_1.Role),
    tslib_1.__metadata("design:type", Number)
], Users.prototype, "roleId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => rental_model_1.Rental, { keyFrom: 'id', keyTo: 'userId' }),
    tslib_1.__metadata("design:type", Array)
], Users.prototype, "rentals", void 0);
Users = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            strict: true,
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Users);
exports.Users = Users;
//# sourceMappingURL=users.model.js.map