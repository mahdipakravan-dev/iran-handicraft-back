import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Craft, CraftDocument } from './craft.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CraftService {
  constructor(
    @InjectModel(Craft.name) private readonly craftModel: Model<CraftDocument>,
  ) {}

  async findAll() {
    return this.craftModel.find().populate('city');
  }

  async create() {
    const createdCraft = await this.craftModel.create({
      title: 'سوهان',
      slug: 'sohan',
      desc: 'سوهان یکی از انواع شیرینی ها سنتی ایرانی است که با دستورهای بسیار متنوعی تهیه می شود. این شیرینی خوشمزه که معمولا به همراه نوشیدنی های داغ مثل چای سرو می شود از سوغاتی های بسیار معروف شهر قم است، برای مشاهده آموزش طرز تهیه سوهان در ادامه با سایت آموزشی چی شی همراه باشید.',
      city: '62937c5bfd81b21fc8e3a00f',
    });
    return createdCraft;
  }
}
