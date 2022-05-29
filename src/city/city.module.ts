import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { City } from './city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  providers: [CityService],
  controllers: [CityController],
})
export class CityModule {}
