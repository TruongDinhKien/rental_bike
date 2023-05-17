import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Bike, BikeRelations} from '../models';

export class BikeRepository extends DefaultCrudRepository<
  Bike,
  typeof Bike.prototype.bikeId,
  BikeRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Bike, dataSource);
  }
}
