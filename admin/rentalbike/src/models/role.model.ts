import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Role extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  roleId?: number;

  @property({
    type: 'string',
  })
  name?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
