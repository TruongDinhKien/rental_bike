import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {User, UserRelations, Role, Rental} from '../models';
import {RoleRepository} from './role.repository';
import {RentalRepository} from './rental.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.userId,
  UserRelations
> {

  public readonly role: BelongsToAccessor<Role, typeof User.prototype.userId>;

  public readonly rentals: HasManyRepositoryFactory<Rental, typeof User.prototype.userId>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('RoleRepository') protected roleRepositoryGetter: Getter<RoleRepository>, @repository.getter('RentalRepository') protected rentalRepositoryGetter: Getter<RentalRepository>,
  ) {
    super(User, dataSource);
    this.rentals = this.createHasManyRepositoryFactoryFor('rentals', rentalRepositoryGetter,);
    this.registerInclusionResolver('rentals', this.rentals.inclusionResolver);
    this.role = this.createBelongsToAccessorFor('role', roleRepositoryGetter,);
    this.registerInclusionResolver('role', this.role.inclusionResolver);
  }
}
