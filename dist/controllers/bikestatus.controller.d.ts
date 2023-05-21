import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Bikestatus } from '../models';
import { BikestatusRepository } from '../repositories';
export declare class BikestatusController {
    bikestatusRepository: BikestatusRepository;
    constructor(bikestatusRepository: BikestatusRepository);
    create(bikestatus: Omit<Bikestatus, 'bikeStatusId'>): Promise<Bikestatus>;
    count(where?: Where<Bikestatus>): Promise<Count>;
    find(filter?: Filter<Bikestatus>): Promise<Bikestatus[]>;
    updateAll(bikestatus: Bikestatus, where?: Where<Bikestatus>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Bikestatus>): Promise<Bikestatus>;
    updateById(id: number, bikestatus: Bikestatus): Promise<void>;
    replaceById(id: number, bikestatus: Bikestatus): Promise<void>;
    deleteById(id: number): Promise<void>;
}
