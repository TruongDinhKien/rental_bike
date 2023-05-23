import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Revenue, RevenueRelations, Rental} from '../models';
import {RentalRepository} from './rental.repository';

export class RevenueRepository extends DefaultCrudRepository<
  Revenue,
  typeof Revenue.prototype.id,
  RevenueRelations
> {

  public readonly rental: HasOneRepositoryFactory<Rental, typeof Revenue.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('RentalRepository') protected rentalRepositoryGetter: Getter<RentalRepository>,
  ) {
    super(Revenue, dataSource);
    this.rental = this.createHasOneRepositoryFactoryFor('rental', rentalRepositoryGetter);
    this.registerInclusionResolver('rental', this.rental.inclusionResolver);
  }
}
