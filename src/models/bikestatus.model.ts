import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Bikestatus extends Entity {
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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Bikestatus>) {
    super(data);
  }
}

export interface BikestatusRelations {
  // describe navigational properties here
}

export type BikestatusWithRelations = Bikestatus & BikestatusRelations;
