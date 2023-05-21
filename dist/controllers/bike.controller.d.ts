import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Bike } from '../models';
import { BikeRepository } from '../repositories';
export declare class BikeController {
    bikeRepository: BikeRepository;
    constructor(bikeRepository: BikeRepository);
    create(bike: Omit<Bike, 'id'>): Promise<Bike>;
    count(where?: Where<Bike>): Promise<Count>;
    find(filter?: Filter<Bike>): Promise<Bike[]>;
    updateAll(bike: Bike, where?: Where<Bike>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Bike>): Promise<Bike>;
    updateById(id: number, bike: Bike): Promise<void>;
    replaceById(id: number, bike: Bike): Promise<void>;
    deleteById(id: number): Promise<void>;
}
