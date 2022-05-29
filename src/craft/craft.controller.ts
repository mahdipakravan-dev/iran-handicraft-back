import { Controller, Get } from '@nestjs/common';
import { CraftService } from './craft.service';
import { Craft } from './craft.entity';

@Controller('craft')
export class CraftController {
  constructor(private readonly cityService: CraftService) {}

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get('/create')
  create() {
    // console.log('CREATING...');
    return this.cityService.create().then();
  }
}
