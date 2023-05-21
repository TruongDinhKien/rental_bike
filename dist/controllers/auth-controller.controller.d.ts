import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SchemaObject } from '@loopback/rest';
import { Users } from '../models';
import { UserRepository } from '../repositories';
import { UserService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { JWTService, PasswordHasher } from '../services';
import { Credentials } from '@loopback/authentication-jwt';
export declare class NewUserRequest extends Users {
    password: string;
}
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: SchemaObject;
        };
    };
};
export declare class AuthController {
    jwtService: JWTService;
    userService: UserService<Users, Credentials>;
    user: UserProfile;
    protected userRepository: UserRepository;
    passwordHasher: PasswordHasher;
    constructor(jwtService: JWTService, userService: UserService<Users, Credentials>, user: UserProfile, userRepository: UserRepository, passwordHasher: PasswordHasher);
    create(user: Omit<Users, 'id'>): Promise<Users>;
    count(where?: Where<Users>): Promise<Count>;
    find(filter?: Filter<Users>): Promise<Users[]>;
    updateAll(users: Users, where?: Where<Users>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Users>): Promise<Users>;
    updateById(id: string, users: Users): Promise<void>;
    replaceById(id: string, users: Users): Promise<void>;
    deleteById(id: string): Promise<void>;
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
    whoAmI(currentUserProfile: UserProfile): Promise<any>;
    signUp(newUserRequest: Omit<NewUserRequest, 'id'>): Promise<Users>;
}
