import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import { JWTAuthenticationComponent, JWTService, TokenServiceBindings, UserServiceBindings } from '@loopback/authentication-jwt';
import { DbDataSource } from './datasources';
import { AuthenticationComponent } from '@loopback/authentication';
import { PasswordHasherBindings, UserServiceBindings as UserServiceBindingsKey } from './keys';
import { BcryptHasher, UserManagementService } from './services';

export {ApplicationConfig};

export class RentalbikeApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

     // Mount authentication system
     this.component(AuthenticationComponent);
     // Mount jwt component
     this.component(JWTAuthenticationComponent);
     // Bind datasource
     this.dataSource(DbDataSource, UserServiceBindings.DATASOURCE_NAME);

     this.bind(PasswordHasherBindings.ROUNDS).to(10);
     this.bind(PasswordHasherBindings.PASSWORD_HASHER).toClass(BcryptHasher);
     this.bind(TokenServiceBindings.TOKEN_SERVICE).toClass(JWTService);
     this.bind(UserServiceBindingsKey.USER_SERVICE).toClass(UserManagementService);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
