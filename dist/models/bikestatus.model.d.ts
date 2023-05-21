import { Entity } from '@loopback/repository';
export declare class Bikestatus extends Entity {
    bikeStatusId?: number;
    name?: string;
    [prop: string]: any;
    constructor(data?: Partial<Bikestatus>);
}
export interface BikestatusRelations {
}
export type BikestatusWithRelations = Bikestatus & BikestatusRelations;
