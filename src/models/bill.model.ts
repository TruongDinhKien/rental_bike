import { Entity, model, property } from '@loopback/repository'

@model({ settings: { strict: true } })
export class Bill extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number

  @property({
    type: 'number',
  })
  totalAmount?: number

  @property({
    type: 'date',
  })
  date?: string

  @property({
    type: 'string',
    default: 'VND',
  })
  currency?: string

  // tax in percent
  @property({
    type: 'number',
    default: 10,
  })
  tax?: number

  @property({
    type: 'number',
  })
  rentalId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any

  constructor(data?: Partial<Bill>) {
    super(data)
  }
}

export interface BillRelations {
  // describe navigational properties here
}

export type BillWithRelations = Bill & BillRelations
