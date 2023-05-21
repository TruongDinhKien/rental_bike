import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Rental } from '../models';
import { RentalRepository } from '../repositories';
export declare class RentalController {
    rentalRepository: RentalRepository;
    constructor(rentalRepository: RentalRepository);
    create(rental: Omit<Rental, 'rentalId'>): Promise<Rental>;
    count(where?: Where<Rental>): Promise<Count>;
    find(filter?: Filter<Rental>): Promise<Rental[]>;
    updateAll(rental: Rental, where?: Where<Rental>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Rental>): Promise<Rental>;
    updateById(id: number, rental: Rental): Promise<void>;
    replaceById(id: number, rental: Rental): Promise<void>;
    deleteById(id: number): Promise<void>;
}
