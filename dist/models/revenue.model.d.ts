import { Entity } from '@loopback/repository';
import { Rental } from './rental.model';
export declare class Revenue extends Entity {
    revenueId?: number;
    rentalId?: number;
    amount?: number;
    date?: string;
    rental: Rental;
    [prop: string]: any;
    constructor(data?: Partial<Revenue>);
}
export interface RevenueRelations {
}
export type RevenueWithRelations = Revenue & RevenueRelations;
