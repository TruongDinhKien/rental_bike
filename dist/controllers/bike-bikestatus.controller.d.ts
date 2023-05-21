import { Bike, Bikestatus } from '../models';
import { BikeRepository } from '../repositories';
export declare class BikeBikestatusController {
    bikeRepository: BikeRepository;
    constructor(bikeRepository: BikeRepository);
    getBikestatus(id: typeof Bike.prototype.bikeId): Promise<Bikestatus>;
}
