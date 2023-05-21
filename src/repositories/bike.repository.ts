import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Bike, BikeRelations, Bikestatus, Rental} from '../models';
import {BikestatusRepository} from './bikestatus.repository';
import {RentalRepository} from './rental.repository';

export class BikeRepository extends DefaultCrudRepository<
  Bike,
  typeof Bike.prototype.bikeId,
  BikeRelations
> {

  public readonly bikestatus: BelongsToAccessor<Bikestatus, typeof Bike.prototype.bikeId>;

  public readonly rentals: HasManyRepositoryFactory<Rental, typeof Bike.prototype.bikeId>;

  constructor(@inject('datasources.db') dataSource: DbDataSource, @repository.getter('BikestatusRepository') protected bikestatusRepositoryGetter: Getter<BikestatusRepository>, @repository.getter('RentalRepository') protected rentalRepositoryGetter: Getter<RentalRepository>,) {
    super(Bike, dataSource);
    this.rentals = this.createHasManyRepositoryFactoryFor('rentals', rentalRepositoryGetter,);
    this.registerInclusionResolver('rentals', this.rentals.inclusionResolver);
    this.bikestatus = this.createBelongsToAccessorFor('bikestatus', bikestatusRepositoryGetter,);
    this.registerInclusionResolver('bikestatus', this.bikestatus.inclusionResolver);
  }
}
