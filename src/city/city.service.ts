import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { City } from './city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: MongoRepository<City>,
  ) {}

  async findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  async create(): Promise<City> {
    return this.cityRepository.save({ name: 'a city' });
  }
}
