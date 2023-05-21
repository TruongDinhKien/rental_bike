import { Entity } from '@loopback/repository';
export declare class Rental extends Entity {
    rentalId?: number;
    userId?: number;
    bikeId?: number;
    startTime?: number;
    endTime?: number;
    status?: boolean;
    revenueId?: number;
    [prop: string]: any;
    constructor(data?: Partial<Rental>);
}
export interface RentalRelations {
}
export type RentalWithRelations = Rental & RentalRelations;
