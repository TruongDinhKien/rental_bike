"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, roleRepositoryGetter, rentalRepositoryGetter, userCredentialsRepositoryGetter) {
        super(models_1.Users, dataSource);
        this.roleRepositoryGetter = roleRepositoryGetter;
        this.rentalRepositoryGetter = rentalRepositoryGetter;
        this.userCredentialsRepositoryGetter = userCredentialsRepositoryGetter;
        this.userCredentials = this.createHasOneRepositoryFactoryFor('userCredentials', userCredentialsRepositoryGetter);
        this.rentals = this.createHasManyRepositoryFactoryFor('rentals', rentalRepositoryGetter);
        this.registerInclusionResolver('rentals', this.rentals.inclusionResolver);
        this.role = this.createBelongsToAccessorFor('role', roleRepositoryGetter);
        this.registerInclusionResolver('role', this.role.inclusionResolver);
    }
    async findCredentials(id) {
        try {
            return await this.userCredentials(id).get();
        }
        catch (err) {
            if (err.code === 'ENTITY_NOT_FOUND') {
                return undefined;
            }
            throw err;
        }
    }
};
UserRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('RoleRepository')),
    tslib_1.__param(2, repository_1.repository.getter('RentalRepository')),
    tslib_1.__param(3, repository_1.repository.getter('UserCredentialsRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function, Function])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=users.repository.js.map