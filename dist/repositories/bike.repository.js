"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let BikeRepository = class BikeRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, bikestatusRepositoryGetter, rentalRepositoryGetter) {
        super(models_1.Bike, dataSource);
        this.bikestatusRepositoryGetter = bikestatusRepositoryGetter;
        this.rentalRepositoryGetter = rentalRepositoryGetter;
        this.rentals = this.createHasManyRepositoryFactoryFor('rentals', rentalRepositoryGetter);
        this.registerInclusionResolver('rentals', this.rentals.inclusionResolver);
        this.bikestatus = this.createBelongsToAccessorFor('bikestatus', bikestatusRepositoryGetter);
        this.registerInclusionResolver('bikestatus', this.bikestatus.inclusionResolver);
    }
};
BikeRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('BikestatusRepository')),
    tslib_1.__param(2, repository_1.repository.getter('RentalRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function, Function])
], BikeRepository);
exports.BikeRepository = BikeRepository;
//# sourceMappingURL=bike.repository.js.map