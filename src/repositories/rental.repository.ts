import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasOneRepositoryFactory, repository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Bill, Rental, RentalRelations} from '../models';
import { BillRepository } from './bill.repository';

export class RentalRepository extends DefaultCrudRepository<
  Rental,
  typeof Rental.prototype.id,
  RentalRelations
> {
  
  public readonly bill: HasOneRepositoryFactory<Bill, typeof Bill.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('BillRepository') protected billRepositoryGetter: Getter<BillRepository>
  ) {
    super(Rental, dataSource);
    this.bill = this.createHasOneRepositoryFactoryFor('bill', billRepositoryGetter);
    this.registerInclusionResolver('bill', this.bill.inclusionResolver);
  }
}
