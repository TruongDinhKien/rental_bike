import {
  Filter,
  repository,
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
} from '@loopback/rest';
import {
  Rental,
} from '../models';
import {UserRepository} from '../repositories';

export class UserRentalController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/rentals', {
    responses: {
      '200': {
        description: 'Array of User has many Rental',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Rental)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Rental>,
  ): Promise<Rental[]> {
    return this.userRepository.rentals(id).find(filter);
  }

}
