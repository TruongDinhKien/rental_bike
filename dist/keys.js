"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceBindings = exports.PasswordHasherBindings = void 0;
const context_1 = require("@loopback/context");
var PasswordHasherBindings;
(function (PasswordHasherBindings) {
    PasswordHasherBindings.PASSWORD_HASHER = context_1.BindingKey.create('services.hasher');
    PasswordHasherBindings.ROUNDS = context_1.BindingKey.create('services.hasher.round');
})(PasswordHasherBindings = exports.PasswordHasherBindings || (exports.PasswordHasherBindings = {}));
var UserServiceBindings;
(function (UserServiceBindings) {
    UserServiceBindings.USER_SERVICE = context_1.BindingKey.create('services.user.service');
})(UserServiceBindings = exports.UserServiceBindings || (exports.UserServiceBindings = {}));
//# sourceMappingURL=keys.js.map