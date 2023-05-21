"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let RevenueRepository = class RevenueRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, rentalRepositoryGetter) {
        super(models_1.Revenue, dataSource);
        this.rentalRepositoryGetter = rentalRepositoryGetter;
        this.rental = this.createHasOneRepositoryFactoryFor('rental', rentalRepositoryGetter);
        this.registerInclusionResolver('rental', this.rental.inclusionResolver);
    }
};
RevenueRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('RentalRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], RevenueRepository);
exports.RevenueRepository = RevenueRepository;
//# sourceMappingURL=revenue.repository.js.map