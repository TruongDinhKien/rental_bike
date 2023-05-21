"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicAuthorization = void 0;
const tslib_1 = require("tslib");
const authorization_1 = require("@loopback/authorization");
const security_1 = require("@loopback/security");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
// Instance level authorizer
// Can be also registered as an authorizer, depends on users' need.
async function basicAuthorization(authorizationCtx, metadata) {
    // No access if authorization details are missing
    let currentUser;
    if (authorizationCtx.principals.length > 0) {
        const user = lodash_1.default.pick(authorizationCtx.principals[0], [
            'id',
            'name',
            'roles',
        ]);
        currentUser = { [security_1.securityId]: user.id, name: user.name, roles: user.roles };
    }
    else {
        return authorization_1.AuthorizationDecision.DENY;
    }
    if (!currentUser.roles) {
        return authorization_1.AuthorizationDecision.DENY;
    }
    // Authorize everything that does not have a allowedRoles property
    if (!metadata.allowedRoles) {
        return authorization_1.AuthorizationDecision.ALLOW;
    }
    let roleIsAllowed = false;
    for (const role of currentUser.roles) {
        if (metadata.allowedRoles.includes(role)) {
            roleIsAllowed = true;
            break;
        }
    }
    if (!roleIsAllowed) {
        return authorization_1.AuthorizationDecision.DENY;
    }
    // Admin and support accounts bypass id verification
    if (currentUser.roles.includes(3) ||
        currentUser.roles.includes(4)) {
        return authorization_1.AuthorizationDecision.ALLOW;
    }
    /**
     * Allow access only to model owners, using route as source of truth
     *
     * eg. @post('/users/{userId}/orders', ...) returns `userId` as args[0]
     */
    if (currentUser[security_1.securityId] === authorizationCtx.invocationContext.args[0]) {
        return authorization_1.AuthorizationDecision.ALLOW;
    }
    return authorization_1.AuthorizationDecision.DENY;
}
exports.basicAuthorization = basicAuthorization;
//# sourceMappingURL=basic.authorizor.js.map