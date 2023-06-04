import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where } from '@loopback/repository'
import { post, param, get, getModelSchemaRef, patch, put, del, requestBody, response } from '@loopback/rest'
import { Bill } from '../models'
import { BillRepository } from '../repositories'

export class BillController {
  constructor(
    @repository(BillRepository)
    public billRepository: BillRepository,
  ) {}

  @get('/bills/count')
  @response(200, {
    description: 'Bill model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(@param.where(Bill) where?: Where<Bill>): Promise<Count> {
    return this.billRepository.count(where)
  }

  @get('/bills')
  @response(200, {
    description: 'Array of Bill model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Bill, { includeRelations: true }),
        },
      },
    },
  })
  async find(@param.filter(Bill) filter?: Filter<Bill>): Promise<Bill[]> {
    return this.billRepository.find(filter)
  }

  @get('/bills/{id}')
  @response(200, {
    description: 'Bill model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Bill, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Bill, { exclude: 'where' }) filter?: FilterExcludingWhere<Bill>,
  ): Promise<Bill> {
    return this.billRepository.findById(id, filter)
  }

  @del('/bills/{id}')
  @response(204, {
    description: 'Bill DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.billRepository.deleteById(id)
  }
}
