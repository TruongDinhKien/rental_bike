import { Count, Filter, Where } from '@loopback/repository';
import { Bike, Rental } from '../models';
import { BikeRepository } from '../repositories';
export declare class BikeRentalController {
    protected bikeRepository: BikeRepository;
    constructor(bikeRepository: BikeRepository);
    find(id: number, filter?: Filter<Rental>): Promise<Rental[]>;
    create(id: typeof Bike.prototype.bikeId, rental: Omit<Rental, 'rentalId'>): Promise<Rental>;
    patch(id: number, rental: Partial<Rental>, where?: Where<Rental>): Promise<Count>;
    delete(id: number, where?: Where<Rental>): Promise<Count>;
}
