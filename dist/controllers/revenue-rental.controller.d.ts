import { Count, Filter, Where } from '@loopback/repository';
import { Revenue, Rental } from '../models';
import { RevenueRepository } from '../repositories';
export declare class RevenueRentalController {
    protected revenueRepository: RevenueRepository;
    constructor(revenueRepository: RevenueRepository);
    get(id: number, filter?: Filter<Rental>): Promise<Rental>;
    create(id: typeof Revenue.prototype.revenueId, rental: Omit<Rental, 'rentalId'>): Promise<Rental>;
    patch(id: number, rental: Partial<Rental>, where?: Where<Rental>): Promise<Count>;
    delete(id: number, where?: Where<Rental>): Promise<Count>;
}
