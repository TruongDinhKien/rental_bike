import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Bike, BikeRelations, Bikestatus, Rental } from '../models';
import { BikestatusRepository } from './bikestatus.repository';
import { RentalRepository } from './rental.repository';
export declare class BikeRepository extends DefaultCrudRepository<Bike, typeof Bike.prototype.bikeId, BikeRelations> {
    protected bikestatusRepositoryGetter: Getter<BikestatusRepository>;
    protected rentalRepositoryGetter: Getter<RentalRepository>;
    readonly bikestatus: BelongsToAccessor<Bikestatus, typeof Bike.prototype.bikeId>;
    readonly rentals: HasManyRepositoryFactory<Rental, typeof Bike.prototype.bikeId>;
    constructor(dataSource: DbDataSource, bikestatusRepositoryGetter: Getter<BikestatusRepository>, rentalRepositoryGetter: Getter<RentalRepository>);
}
