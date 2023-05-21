import { Entity } from '@loopback/repository';
import { Rental } from './rental.model';
import { UserCredentials } from './usercredentials.model';
export declare class Users extends Entity {
    id: string;
    email: string;
    userCredentials: UserCredentials;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    roleId?: number;
    rentals: Rental[];
    [prop: string]: any;
    constructor(data?: Partial<Users>);
}
export interface UserRelations {
}
export type UserWithRelations = Users & UserRelations;
