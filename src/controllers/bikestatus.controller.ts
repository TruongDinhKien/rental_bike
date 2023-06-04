import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Bikestatus} from '../models';
import {BikestatusRepository} from '../repositories';

export class BikestatusController {
  constructor(
    @repository(BikestatusRepository)
    public bikestatusRepository : BikestatusRepository,
  ) {}

  @post('/bikestatuses')
  @response(200, {
    description: 'Bikestatus model instance',
    content: {'application/json': {schema: getModelSchemaRef(Bikestatus)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bikestatus, {
            title: 'NewBikestatus',
            exclude: ['id'],
          }),
        },
      },
    })
    bikestatus: Omit<Bikestatus, 'id'>,
  ): Promise<Bikestatus> {
    return this.bikestatusRepository.create(bikestatus);
  }

  @get('/bikestatuses/count')
  @response(200, {
    description: 'Bikestatus model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Bikestatus) where?: Where<Bikestatus>,
  ): Promise<Count> {
    return this.bikestatusRepository.count(where);
  }

  @get('/bikestatuses')
  @response(200, {
    description: 'Array of Bikestatus model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Bikestatus, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Bikestatus) filter?: Filter<Bikestatus>,
  ): Promise<Bikestatus[]> {
    return this.bikestatusRepository.find(filter);
  }

  @get('/bikestatuses/{id}')
  @response(200, {
    description: 'Bikestatus model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Bikestatus, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Bikestatus, {exclude: 'where'}) filter?: FilterExcludingWhere<Bikestatus>
  ): Promise<Bikestatus> {
    return this.bikestatusRepository.findById(id, filter);
  }

  @patch('/bikestatuses/{id}')
  @response(204, {
    description: 'Bikestatus PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bikestatus, {partial: true}),
        },
      },
    })
    bikestatus: Bikestatus,
  ): Promise<void> {
    await this.bikestatusRepository.updateById(id, bikestatus);
  }


  @del('/bikestatuses/{id}')
  @response(204, {
    description: 'Bikestatus DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bikestatusRepository.deleteById(id);
  }
}
