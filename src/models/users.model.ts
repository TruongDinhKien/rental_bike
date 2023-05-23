import {
  Entity,
  model,
  property,
  belongsTo,
  hasMany,
  hasOne,
} from '@loopback/repository';
import {Role} from './role.model';
import {Rental} from './rental.model';
// import { UserCredentials } from '@loopback/authentication-jwt';
import {UserCredentials} from './usercredentials.model';

@model({
  settings: {
    strict: true,
  },
})
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    defaultFn: 'uuidv4',
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @hasOne(() => UserCredentials, {keyFrom: 'id', keyTo: 'userId'})
  userCredentials: UserCredentials;

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

  @property({
    type: 'array',
    itemType: 'string',
  })
  roles?: string[];

  @hasMany(() => Rental, {keyFrom: 'id', keyTo: 'userId'})
  rentals: Rental[];
  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = Users & UserRelations;
