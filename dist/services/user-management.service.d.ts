import { UserService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { Users, UserWithPassword } from '../models';
import { Credentials, UserRepository } from '../repositories';
import { PasswordHasher } from './hash.password.bcryptjs';
export declare class UserManagementService implements UserService<Users, Credentials> {
    userRepository: UserRepository;
    passwordHasher: PasswordHasher;
    constructor(userRepository: UserRepository, passwordHasher: PasswordHasher);
    verifyCredentials(credentials: Credentials): Promise<Users>;
    convertToUserProfile(user: Users): UserProfile;
    createUser(userWithPassword: UserWithPassword): Promise<Users>;
    /**
     * Checks user reset timestamp if its same day increase count
     * otherwise set current date as timestamp and start counting
     * For first time reset request set reset count to 1 and assign same day timestamp
     * @param user
     */
    updateResetRequestLimit(user: Users): Promise<Users>;
    /**
     * Ensures reset key is only valid for a day
     * @param user
     */
    validateResetKeyLifeSpan(user: Users): Promise<Users>;
}
