import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
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
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Rental>,
  ): Promise<Rental[]> {
    return this.userRepository.rentals(id).find(filter);
  }

  @post('/users/{id}/rentals', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rental)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof User.prototype.userId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rental, {
            title: 'NewRentalInUser',
            exclude: ['rentalId'],
            optional: ['userId']
          }),
        },
      },
    }) rental: Omit<Rental, 'rentalId'>,
  ): Promise<Rental> {
    return this.userRepository.rentals(id).create(rental);
  }

  @patch('/users/{id}/rentals', {
    responses: {
      '200': {
        description: 'User.Rental PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rental, {partial: true}),
        },
      },
    })
    rental: Partial<Rental>,
    @param.query.object('where', getWhereSchemaFor(Rental)) where?: Where<Rental>,
  ): Promise<Count> {
    return this.userRepository.rentals(id).patch(rental, where);
  }

  @del('/users/{id}/rentals', {
    responses: {
      '200': {
        description: 'User.Rental DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Rental)) where?: Where<Rental>,
  ): Promise<Count> {
    return this.userRepository.rentals(id).delete(where);
  }
}
