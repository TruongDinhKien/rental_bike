import { UserService } from '@loopback/authentication';
import { BindingKey } from '@loopback/context';
import { Users } from './models';
import { Credentials } from './repositories';
import { PasswordHasher } from './services';
export declare namespace PasswordHasherBindings {
    const PASSWORD_HASHER: BindingKey<PasswordHasher<string>>;
    const ROUNDS: BindingKey<number>;
}
export declare namespace UserServiceBindings {
    const USER_SERVICE: BindingKey<UserService<Users, Credentials>>;
}
