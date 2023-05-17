import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Rental, RentalRelations} from '../models';

export class RentalRepository extends DefaultCrudRepository<
  Rental,
  typeof Rental.prototype.rentalId,
  RentalRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Rental, dataSource);
  }
}
