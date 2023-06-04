import { Entity, hasOne, model, property } from '@loopback/repository'
import { Bill } from './bill.model'

@model({ settings: { strict: true } })
export class Rental extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number

  @property({
    type: 'string',
  })
  userId?: string

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
    type: 'number',
  })
  amount?: number

  // 'awaiting','renting','returned'
  @property({
    type: 'string',
    default: 'awaiting'
  })
  status?: string 

  @hasOne(() => Bill)
  bill: Bill;
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
