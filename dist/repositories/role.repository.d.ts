import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Role, RoleRelations } from '../models';
export declare class RoleRepository extends DefaultCrudRepository<Role, typeof Role.prototype.roleId, RoleRelations> {
    constructor(dataSource: DbDataSource);
}
