import {Entity, model, property} from '@loopback/repository';

@model()
export class Bike extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  bikeId?: number;

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

  constructor(data?: Partial<Bike>) {
    super(data);
  }
}

export interface BikeRelations {
  // describe navigational properties here
}

export type BikeWithRelations = Bike & BikeRelations;
