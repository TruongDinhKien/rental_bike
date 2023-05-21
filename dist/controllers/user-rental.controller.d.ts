import { Count, Filter, Where } from '@loopback/repository';
import { Users, Rental } from '../models';
import { UserRepository } from '../repositories';
export declare class UserRentalController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(id: string, filter?: Filter<Rental>): Promise<Rental[]>;
    create(id: typeof Users.prototype.id, rental: Omit<Rental, 'rentalId'>): Promise<Rental>;
    patch(id: string, rental: Partial<Rental>, where?: Where<Rental>): Promise<Count>;
    delete(id: string, where?: Where<Rental>): Promise<Count>;
}
