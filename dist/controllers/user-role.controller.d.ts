import { Users, Role } from '../models';
import { UserRepository } from '../repositories';
export declare class UserRoleController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    getRole(id: typeof Users.prototype.id): Promise<Role>;
}
