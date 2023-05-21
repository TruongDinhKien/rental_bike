import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Revenue } from '../models';
import { RevenueRepository } from '../repositories';
export declare class RevenueController {
    revenueRepository: RevenueRepository;
    constructor(revenueRepository: RevenueRepository);
    create(revenue: Omit<Revenue, 'revenueId'>): Promise<Revenue>;
    count(where?: Where<Revenue>): Promise<Count>;
    find(filter?: Filter<Revenue>): Promise<Revenue[]>;
    updateAll(revenue: Revenue, where?: Where<Revenue>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Revenue>): Promise<Revenue>;
    updateById(id: number, revenue: Revenue): Promise<void>;
    replaceById(id: number, revenue: Revenue): Promise<void>;
    deleteById(id: number): Promise<void>;
}
