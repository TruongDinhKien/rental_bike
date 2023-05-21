/**
 * Service HashPassword using module 'bcryptjs'.
 * It takes in a plain password, generates a salt with given
 * round and returns the hashed password as a string
 */
export type HashPassword = (password: string, rounds: number) => Promise<string>;
export declare function hashPassword(password: string, rounds: number): Promise<string>;
export interface PasswordHasher<T = string> {
    hashPassword(password: T): Promise<T>;
    comparePassword(providedPass: T, storedPass: T): Promise<boolean>;
}
export declare class BcryptHasher implements PasswordHasher<string> {
    private readonly rounds;
    constructor(rounds: number);
    hashPassword(password: string): Promise<string>;
    comparePassword(providedPass: string, storedPass: string): Promise<boolean>;
}
