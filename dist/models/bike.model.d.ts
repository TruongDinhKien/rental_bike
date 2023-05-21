import { Entity } from '@loopback/repository';
import { Rental } from './rental.model';
export declare class Bike extends Entity {
    bikeId?: number;
    name?: string;
    description?: string;
    imgUrl?: string;
    bikestatusId: number;
    rentals: Rental[];
    constructor(data?: Partial<Bike>);
}
export interface BikeRelations {
}
export type BikeWithRelations = Bike & BikeRelations;
