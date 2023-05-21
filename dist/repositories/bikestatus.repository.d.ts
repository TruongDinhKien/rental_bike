import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Bikestatus, BikestatusRelations } from '../models';
export declare class BikestatusRepository extends DefaultCrudRepository<Bikestatus, typeof Bikestatus.prototype.bikeStatusId, BikestatusRelations> {
    constructor(dataSource: DbDataSource);
}
