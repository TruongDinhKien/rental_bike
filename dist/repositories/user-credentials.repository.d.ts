import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { UserCredentials, UserCredentialsRelations, Users } from '../models';
import { UserRepository } from './users.repository';
export declare class UserCredentialsRepository extends DefaultCrudRepository<UserCredentials, typeof UserCredentials.prototype.id, UserCredentialsRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly user: BelongsToAccessor<Users, typeof UserCredentials.prototype.id>;
    constructor(dataSource: DbDataSource, userRepositoryGetter: Getter<UserRepository>);
}
