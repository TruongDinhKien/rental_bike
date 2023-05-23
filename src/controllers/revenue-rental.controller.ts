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
  Revenue,
  Rental,
} from '../models';
import {RevenueRepository} from '../repositories';

export class RevenueRentalController {
  constructor(
    @repository(RevenueRepository) protected revenueRepository: RevenueRepository,
  ) { }

  @get('/revenues/{id}/rental', {
    responses: {
      '200': {
        description: 'Revenue has one Rental',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Rental),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Rental>,
  ): Promise<Rental> {
    return this.revenueRepository.rental(id).get(filter);
  }

  @post('/revenues/{id}/rental', {
    responses: {
      '200': {
        description: 'Revenue model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rental)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Revenue.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rental, {
            title: 'NewRentalInRevenue',
            exclude: ['id'],
            optional: ['revenueId']
          }),
        },
      },
    }) rental: Omit<Rental, 'id'>,
  ): Promise<Rental> {
    return this.revenueRepository.rental(id).create(rental);
  }

  @patch('/revenues/{id}/rental', {
    responses: {
      '200': {
        description: 'Revenue.Rental PATCH success count',
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
    return this.revenueRepository.rental(id).patch(rental, where);
  }

  @del('/revenues/{id}/rental', {
    responses: {
      '200': {
        description: 'Revenue.Rental DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Rental)) where?: Where<Rental>,
  ): Promise<Count> {
    return this.revenueRepository.rental(id).delete(where);
  }
}
