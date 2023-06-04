import { Filter, repository } from '@loopback/repository'
import { BikeRepository, BillRepository, RentalRepository, UserRepository } from '../repositories'
import { param, get, response } from '@loopback/rest'
import { Rental } from '../models'

export class statisticController {
  constructor(
    @repository(RentalRepository)
    public rentalRepository: RentalRepository,
    @repository(UserRepository) protected userRepository: UserRepository,
    @repository(BikeRepository)
    protected bikeRepository: BikeRepository,
    @repository(BillRepository) protected billRepository: BillRepository,
  ) {}

  @get('/statistic')
  @response(200, {
    description: 'Array of Rental model instances with additional statistics',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            totalRevenue: { type: 'number' },
            totalTax: { type: 'number' },
            totalEarnings: { type: 'number' },
            totalRentalBike: { type: 'number' },
          },
        },
      },
    },
  })
  async find(@param.filter(Rental) filter?: Filter<Rental>): Promise<any> {
    let totalRevenue = 0
    let totalTax = 0
    let totalRentalBike = 0
    let totalEarnings = 0
    const rentals = await this.rentalRepository.find({ ...filter, include: [{ relation: 'bill' }] })
 
    for (const rental of rentals) {
      if (rental.amount) totalRevenue += rental.amount
      if (rental?.bill?.totalAmount && rental?.bill?.tax) totalTax += (rental.bill.totalAmount * rental.bill.tax) / 100
      if (rental?.bill?.totalAmount) totalEarnings += rental.bill.totalAmount
      totalRentalBike += 1
    }

    const result = {
      totalRevenue,
      totalTax,
      totalEarnings,
      totalRentalBike,
    }

    return result
  }
}
