import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './city.schema';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }

  @Get('/create')
  create() {
    console.log('CREATING...');
    return this.cityService.create().then();
  }
}
