import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Bike,
  Bikestatus,
} from '../models';
import {BikeRepository} from '../repositories';

export class BikeBikestatusController {
  constructor(
    @repository(BikeRepository)
    public bikeRepository: BikeRepository,
  ) { }

  @get('/bikes/{id}/bikestatus', {
    responses: {
      '200': {
        description: 'Bikestatus belonging to Bike',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Bikestatus),
          },
        },
      },
    },
  })
  async getBikestatus(
    @param.path.number('id') id: typeof Bike.prototype.id,
  ): Promise<Bikestatus> {
    return this.bikeRepository.bikestatus(id);
  }
}
