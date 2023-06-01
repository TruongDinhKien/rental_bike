import { Count, CountSchema, Filter, repository, Where } from '@loopback/repository'
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  HttpErrors,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest'
import { Revenue, Rental } from '../models'
import { BikeRepository, RentalRepository, RevenueRepository, UserRepository } from '../repositories'

export class RevenueRentalController {
  constructor(
    @repository(RentalRepository)
    public rentalRepository: RentalRepository,
    @repository(RevenueRepository) protected revenueRepository: RevenueRepository,
    @repository(UserRepository) protected userRepository: UserRepository,
    @repository(BikeRepository)
    protected bikeRepository: BikeRepository,
  ) {}

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
    return this.revenueRepository.rental(id).get(filter)
  }

  @post('/revenues/rental', {
    responses: {
      '200': {
        description: 'Revenue model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Revenue) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rental, {
            title: 'NewRentalInRevenue',
            exclude: ['id'],
            optional: ['revenueId'],
          }),
        },
      },
    })
    rental: Omit<Rental, 'id'>,
  ): Promise<Revenue> {
    const userExists = await this.userRepository.exists(rental.userId)
    if (!userExists) {
      throw new HttpErrors.NotFound('User not found')
    }

    const bikeExists = await this.bikeRepository.exists(rental.bikeId)
    if (!bikeExists) {
      throw new HttpErrors.NotFound('Bike not found')
    }
    const createdRental = await this.rentalRepository.create(rental)
    if (!createdRental) {
      throw new Error('Failed to create rental')
    }
    const createdRevenue = await this.revenueRepository.create({
      amount: 10000,
      date: new Date().toISOString(),
      rental: createdRental
    })

    console.log(createdRental)
    console.log(createdRevenue)

    return createdRevenue
  }

  @patch('/revenues/{id}/rental', {
    responses: {
      '200': {
        description: 'Revenue.Rental PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rental, { partial: true }),
        },
      },
    })
    rental: Partial<Rental>,
    @param.query.object('where', getWhereSchemaFor(Rental)) where?: Where<Rental>,
  ): Promise<Count> {
    return this.revenueRepository.rental(id).patch(rental, where)
  }

  @del('/revenues/{id}/rental', {
    responses: {
      '200': {
        description: 'Revenue.Rental DELETE success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Rental)) where?: Where<Rental>,
  ): Promise<Count> {
    return this.revenueRepository.rental(id).delete(where)
  }
}
