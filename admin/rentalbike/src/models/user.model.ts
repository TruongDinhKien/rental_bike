import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Role} from './role.model';
import {Rental} from './rental.model';

@model({settings: {strict: true}})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  userId?: number;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  password?: string;

  @property({
    type: 'string',
  })
  firstName?: string;

  @property({
    type: 'string',
  })
  lastName?: string;

  @property({
    type: 'string',
  })
  phoneNumber?: string;

  @belongsTo(() => Role)
  roleId: number;

  @hasMany(() => Rental, {keyTo: 'userId'})
  rentals: Rental[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
