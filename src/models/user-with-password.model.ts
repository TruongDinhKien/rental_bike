import {model, property} from '@loopback/repository';
import {Users} from './users.model';

@model()
export class UserWithPassword extends Users {
  @property({
    type: 'string',
    required: true,
  })
  password: string;
}
