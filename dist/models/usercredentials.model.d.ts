import { Entity } from '@loopback/repository';
export declare class UserCredentials extends Entity {
    id?: number;
    password: string;
    userId: string;
    constructor(data?: Partial<UserCredentials>);
}
export interface UserCredentialsRelations {
}
export type UserCredentialsWithRelations = UserCredentials & UserCredentialsRelations;
