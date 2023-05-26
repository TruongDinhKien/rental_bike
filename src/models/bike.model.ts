import {
  Entity,
  model,
  property,
  belongsTo,
  hasMany,
} from '@loopback/repository';
import {Bikestatus} from './bikestatus.model';
import {Rental} from './rental.model';

@model()
export class Bike extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  imgUrl?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @belongsTo(() => Bikestatus)
  bikestatusId: number;

  @hasMany(() => Rental, {keyTo: 'bikeId'})
  rentals: Rental[];

  constructor(data?: Partial<Bike>) {
    super(data);
  }
}

export interface BikeRelations {
  // describe navigational properties here
}

export type BikeWithRelations = Bike & BikeRelations;
