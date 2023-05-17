import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Bikestatus, BikestatusRelations} from '../models';

export class BikestatusRepository extends DefaultCrudRepository<
  Bikestatus,
  typeof Bikestatus.prototype.bikeStatusId,
  BikestatusRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Bikestatus, dataSource);
  }
}
