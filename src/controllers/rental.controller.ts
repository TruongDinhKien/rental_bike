import { Count, CountSchema, Filter, FilterExcludingWhere, repository, Where } from '@loopback/repository'
import { post, param, get, getModelSchemaRef, patch, put, del, requestBody, response, HttpErrors } from '@loopback/rest'
import { Bill, Rental } from '../models'
import { BikeRepository, BillRepository, RentalRepository, UserRepository } from '../repositories'

const calDate = (startTime: string, endTime: string) => {
  const startDateTime = new Date(startTime)
  const endDateTime = new Date(endTime)
  const oneDayInMilliseconds = 60 * 60 * 1000 // A hours
  const timeDifference = endDateTime.getTime() - startDateTime.getTime()

  return timeDifference / oneDayInMilliseconds
}

export class RentalController {
  constructor(
    @repository(RentalRepository)
    public rentalRepository: RentalRepository,
    @repository(UserRepository) protected userRepository: UserRepository,
    @repository(BikeRepository)
    protected bikeRepository: BikeRepository,
    @repository(BillRepository) protected billRepository: BillRepository,
  ) {}

  @post('/rentals', {
    responses: {
      '200': {
        description: 'Bill model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Rental) } },
      },
    },
  })
  async createWithBill(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rental, {
            title: 'NewRentalInBill',
            exclude: ['id'],
            optional: ['billId'],
          }),
        },
      },
    })
    rental: Omit<Rental, 'id'>,
  ): Promise<Rental> {
    const userExists = await this.userRepository.exists(rental.userId)
    if (!userExists) {
      throw new HttpErrors.BadRequest('User not found')
    }

    const bikeExists = await this.bikeRepository.findById(rental.bikeId)
    if (!bikeExists) {
      throw new HttpErrors.BadRequest('Bike not found')
    }

    if (!bikeExists.quantity || !(bikeExists.quantity > 0)) {
      throw new HttpErrors.BadRequest('Insufficient quantity of bikes')
    }

    bikeExists.quantity -= 1
    await this.bikeRepository.update(bikeExists)

    const numOfday = Math.round(calDate(rental.startTime, rental.endTime))
    if (numOfday < 1) {
      throw new HttpErrors.BadRequest('Time rental at least an hour')
    }
    const createdRental = await this.rentalRepository.create({
      ...rental,
      amount: bikeExists.price && bikeExists.price * numOfday,
    })

    if (rental?.status === 'renting')
      this.rentalRepository.bill(createdRental.id).create({
        totalAmount: bikeExists.price && (bikeExists.price + 0.1 * bikeExists.price) * numOfday,
        date: new Date().toISOString(),
      })

    return createdRental
  }

  @get('/rentals/count')
  @response(200, {
    description: 'Rental model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(@param.where(Rental) where?: Where<Rental>): Promise<Count> {
    return this.rentalRepository.count(where)
  }

  @get('/rentals')
  @response(200, {
    description: 'Array of Rental model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rental, { includeRelations: true }),
        },
      },
    },
  })
  async find(@param.filter(Rental) filter?: Filter<Rental>): Promise<Rental[]> {
    return this.rentalRepository.find(filter)
  }

  @get('/rentals/{id}')
  @response(200, {
    description: 'Rental model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rental, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Rental, { exclude: 'where' }) filter?: FilterExcludingWhere<Rental>,
  ): Promise<Rental> {
    return this.rentalRepository.findById(id, filter)
  }

  @patch('/rentals/{id}')
  @response(204, {
    description: 'Rental PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rental, { partial: true }),
        },
      },
    })
    rental: Rental,
  ): Promise<void> {
    await this.rentalRepository.updateById(id, rental)
  }

  @put('/rentals/{id}')
  @response(204, {
    description: 'Rental PUT success',
  })
  async replaceById(@param.path.number('id') id: number, @requestBody() rental: Rental): Promise<void> {
    await this.rentalRepository.replaceById(id, rental)
  }

  @del('/rentals/{id}')
  @response(204, {
    description: 'Rental DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rentalRepository.deleteById(id)
  }
}
