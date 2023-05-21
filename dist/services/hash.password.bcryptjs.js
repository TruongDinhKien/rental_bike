"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptHasher = exports.hashPassword = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const bcryptjs_1 = require("bcryptjs");
const keys_1 = require("../keys");
// bind function to `services.bcryptjs.HashPassword`
async function hashPassword(password, rounds) {
    const salt = await (0, bcryptjs_1.genSalt)(rounds);
    return (0, bcryptjs_1.hash)(password, salt);
}
exports.hashPassword = hashPassword;
let BcryptHasher = class BcryptHasher {
    constructor(rounds) {
        this.rounds = rounds;
    }
    async hashPassword(password) {
        const salt = await (0, bcryptjs_1.genSalt)(this.rounds);
        return (0, bcryptjs_1.hash)(password, salt);
    }
    async comparePassword(providedPass, storedPass) {
        const passwordIsMatched = await (0, bcryptjs_1.compare)(providedPass, storedPass);
        return passwordIsMatched;
    }
};
BcryptHasher = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(keys_1.PasswordHasherBindings.ROUNDS)),
    tslib_1.__metadata("design:paramtypes", [Number])
], BcryptHasher);
exports.BcryptHasher = BcryptHasher;
//# sourceMappingURL=hash.password.bcryptjs.js.map