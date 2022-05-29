import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { City, CityDocument } from './city.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Craft, CraftDocument } from '../craft/craft.schema';
import { Model } from 'mongoose';

@Injectable()
export class CityService {
  constructor(
    @InjectModel(City.name)
    private cityRepository: Model<CityDocument>,
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
      this.cityRepository.create({ name: city }),
    );
    return Promise.all(promises);
  }
}
