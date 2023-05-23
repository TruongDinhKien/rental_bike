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
  Bike,
  Rental,
} from '../models';
import {BikeRepository} from '../repositories';

export class BikeRentalController {
  constructor(
    @repository(BikeRepository) protected bikeRepository: BikeRepository,
  ) { }

  @get('/bikes/{id}/rentals', {
    responses: {
      '200': {
        description: 'Array of Bike has many Rental',
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
    return this.bikeRepository.rentals(id).find(filter);
  }

  @post('/bikes/{id}/rentals', {
    responses: {
      '200': {
        description: 'Bike model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rental)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Bike.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rental, {
            title: 'NewRentalInBike',
            exclude: ['id'],
          }),
        },
      },
    }) rental: Omit<Rental, 'id'>,
  ): Promise<Rental> {
    return this.bikeRepository.rentals(id).create(rental);
  }

  @patch('/bikes/{id}/rentals', {
    responses: {
      '200': {
        description: 'Bike.Rental PATCH success count',
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
    return this.bikeRepository.rentals(id).patch(rental, where);
  }

  @del('/bikes/{id}/rentals', {
    responses: {
      '200': {
        description: 'Bike.Rental DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Rental)) where?: Where<Rental>,
  ): Promise<Count> {
    return this.bikeRepository.rentals(id).delete(where);
  }
}
