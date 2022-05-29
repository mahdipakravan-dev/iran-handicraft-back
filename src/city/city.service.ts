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

  async create() {
    const array = [
      'آذربایجان شرقی',
      'آذربایجان غربی',
      'اردبیل',
      'اصفهان',
      'البرز',
      'ایلام',
      'بوشهر',
      'تهران',
      'چهارمحال و بختیاری',
      'خراسان جنوبی',
      'خراسان رضوی',
      'خراسان شمالی',
      'خوزستان',
      'زنجان',
      'سمنان',
      'سیستان و بلوچستان',
      'فارس',
      'قزوین',
      'قم',
      'کردستان',
      'کرمان',
      'کرمانشاه',
      'کهگیلویه و بویراحمد',
      'گلستان',
      'گیلان',
      'لرستان',
      'مازندران',
      'مرکزی',
      'هرمزگان',
      'همدان',
      'یزد',
    ];
    const promises = array.map((city) =>
      this.cityRepository.save({ name: city }),
    );
    return Promise.all(promises);
  }
}
