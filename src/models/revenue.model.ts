import {Entity, model, property, hasOne} from '@loopback/repository';
import {Rental} from './rental.model';

@model({settings: {strict: true}})
export class Revenue extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  rentalId?: number;

  @property({
    type: 'number',
  })
  amount?: number;

  @property({
    type: 'date',
  })
  date?: string;

  @hasOne(() => Rental)
  rental: Rental;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Revenue>) {
    super(data);
  }
}

export interface RevenueRelations {
  // describe navigational properties here
}

export type RevenueWithRelations = Revenue & RevenueRelations;
 