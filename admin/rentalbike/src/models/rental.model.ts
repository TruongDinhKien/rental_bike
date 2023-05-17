import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Rental extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  rentalId?: number;

  @property({
    type: 'number',
  })
  userId?: number;

  @property({
    type: 'number',
  })
  bikeId?: number;

  @property({
    type: 'number',
  })
  startTime?: number;

  @property({
    type: 'number',
  })
  endTime?: number;

  @property({
    type: 'boolean',
  })
  status?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Rental>) {
    super(data);
  }
}

export interface RentalRelations {
  // describe navigational properties here
}

export type RentalWithRelations = Rental & RentalRelations;
