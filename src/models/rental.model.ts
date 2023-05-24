import { Entity, model, property } from '@loopback/repository'

@model({ settings: { strict: true } })
export class Rental extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number

  @property({
    type: 'number',
  })
  userId?: number

  @property({
    type: 'number',
  })
  bikeId?: number

  @property({
    type: 'date',
  })
  startTime?: Date

  @property({
    type: 'date',
  })
  endTime?: Date

  @property({
    type: 'boolean',
  })
  status?: boolean

  @property({
    type: 'number',
  })
  revenueId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any

  constructor(data?: Partial<Rental>) {
    super(data)
  }
}

export interface RentalRelations {
  // describe navigational properties here
}

export type RentalWithRelations = Rental & RentalRelations
