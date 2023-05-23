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
import {Revenue} from '../models';
import {RevenueRepository} from '../repositories';

export class RevenueController {
  constructor(
    @repository(RevenueRepository)
    public revenueRepository : RevenueRepository,
  ) {}

  @post('/revenues')
  @response(200, {
    description: 'Revenue model instance',
    content: {'application/json': {schema: getModelSchemaRef(Revenue)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Revenue, {
            title: 'NewRevenue',
            exclude: ['id'],
          }),
        },
      },
    })
    revenue: Omit<Revenue, 'id'>,
  ): Promise<Revenue> {
    return this.revenueRepository.create(revenue);
  }

  @get('/revenues/count')
  @response(200, {
    description: 'Revenue model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Revenue) where?: Where<Revenue>,
  ): Promise<Count> {
    return this.revenueRepository.count(where);
  }

  @get('/revenues')
  @response(200, {
    description: 'Array of Revenue model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Revenue, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Revenue) filter?: Filter<Revenue>,
  ): Promise<Revenue[]> {
    return this.revenueRepository.find(filter);
  }

  @patch('/revenues')
  @response(200, {
    description: 'Revenue PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Revenue, {partial: true}),
        },
      },
    })
    revenue: Revenue,
    @param.where(Revenue) where?: Where<Revenue>,
  ): Promise<Count> {
    return this.revenueRepository.updateAll(revenue, where);
  }

  @get('/revenues/{id}')
  @response(200, {
    description: 'Revenue model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Revenue, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Revenue, {exclude: 'where'}) filter?: FilterExcludingWhere<Revenue>
  ): Promise<Revenue> {
    return this.revenueRepository.findById(id, filter);
  }

  @patch('/revenues/{id}')
  @response(204, {
    description: 'Revenue PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Revenue, {partial: true}),
        },
      },
    })
    revenue: Revenue,
  ): Promise<void> {
    await this.revenueRepository.updateById(id, revenue);
  }

  @put('/revenues/{id}')
  @response(204, {
    description: 'Revenue PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() revenue: Revenue,
  ): Promise<void> {
    await this.revenueRepository.replaceById(id, revenue);
  }

  @del('/revenues/{id}')
  @response(204, {
    description: 'Revenue DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.revenueRepository.deleteById(id);
  }
}
