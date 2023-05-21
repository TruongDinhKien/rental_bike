import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Role } from '../models';
import { RoleRepository } from '../repositories';
export declare class RoleController {
    roleRepository: RoleRepository;
    constructor(roleRepository: RoleRepository);
    create(role: Omit<Role, 'id'>): Promise<Role>;
    count(where?: Where<Role>): Promise<Count>;
    find(filter?: Filter<Role>): Promise<Role[]>;
    updateAll(role: Role, where?: Where<Role>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Role>): Promise<Role>;
    updateById(id: number, role: Role): Promise<void>;
    replaceById(id: number, role: Role): Promise<void>;
    deleteById(id: number): Promise<void>;
}
