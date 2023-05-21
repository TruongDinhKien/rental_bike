import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Rental, RentalRelations } from '../models';
export declare class RentalRepository extends DefaultCrudRepository<Rental, typeof Rental.prototype.rentalId, RentalRelations> {
    constructor(dataSource: DbDataSource);
}
