import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Craft } from './craft.entity';

@Injectable()
export class CraftService {
  constructor(
    @InjectRepository(Craft)
    private readonly craftRepository: MongoRepository<Craft>,
  ) {}

  async findAll() {
    return this.craftRepository.find({ relations: { city: true } });
  }

  async create() {
    return this.craftRepository.save({
      name: 'سوهان',
      description: 'شسیسشیشسیشسیشسیسشیش',
      city: '629330e46563e776cfa28b3b',
    });
  }
}
