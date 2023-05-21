import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Users, UserRelations, Role, Rental } from '../models';
import { RoleRepository } from './role.repository';
import { RentalRepository } from './rental.repository';
import { UserCredentials, UserCredentialsRepository } from '@loopback/authentication-jwt';
export type Credentials = {
    email: string;
    password: string;
};
export declare class UserRepository extends DefaultCrudRepository<Users, typeof Users.prototype.id, UserRelations> {
    protected roleRepositoryGetter: Getter<RoleRepository>;
    protected rentalRepositoryGetter: Getter<RentalRepository>;
    protected userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>;
    readonly role: BelongsToAccessor<Role, typeof Users.prototype.id>;
    readonly rentals: HasManyRepositoryFactory<Rental, typeof Users.prototype.id>;
    readonly userCredentials: HasOneRepositoryFactory<UserCredentials, typeof Users.prototype.id>;
    constructor(dataSource: DbDataSource, roleRepositoryGetter: Getter<RoleRepository>, rentalRepositoryGetter: Getter<RentalRepository>, userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>);
    findCredentials(id: typeof Users.prototype.id): Promise<UserCredentials | undefined>;
}
