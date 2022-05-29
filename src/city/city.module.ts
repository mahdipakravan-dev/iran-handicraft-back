import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { City, CitySchema } from './city.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: City.name,
        schema: CitySchema,
      },
    ]),
  ],
  providers: [CityService],
  controllers: [CityController],
})
export class CityModule {}
