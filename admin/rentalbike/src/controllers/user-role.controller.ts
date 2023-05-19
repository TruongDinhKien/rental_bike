import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  User,
  Role,
} from '../models';
import {UserRepository} from '../repositories';

export class UserRoleController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @get('/users/{id}/role', {
    responses: {
      '200': {
        description: 'Role belonging to User',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Role),
          },
        },
      },
    },
  })
  async getRole(
    @param.path.number('id') id: typeof User.prototype.userId,
  ): Promise<Role> {
    return this.userRepository.role(id);
  }
}
