import { Entity } from '@loopback/repository';
export declare class Role extends Entity {
    roleId?: number;
    name?: string;
    [prop: string]: any;
    constructor(data?: Partial<Role>);
}
export interface RoleRelations {
}
export type RoleWithRelations = Role & RoleRelations;
