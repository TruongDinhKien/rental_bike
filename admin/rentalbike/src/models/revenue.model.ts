import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Revenue extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  revenueId?: number;

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
