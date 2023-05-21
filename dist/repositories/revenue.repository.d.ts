import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Revenue, RevenueRelations, Rental } from '../models';
import { RentalRepository } from './rental.repository';
export declare class RevenueRepository extends DefaultCrudRepository<Revenue, typeof Revenue.prototype.revenueId, RevenueRelations> {
    protected rentalRepositoryGetter: Getter<RentalRepository>;
    readonly rental: HasOneRepositoryFactory<Rental, typeof Revenue.prototype.revenueId>;
    constructor(dataSource: DbDataSource, rentalRepositoryGetter: Getter<RentalRepository>);
}
