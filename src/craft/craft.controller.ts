import { Controller, Get } from '@nestjs/common';
import { CraftService } from './craft.service';
import { Craft } from './craft.schema';

@Controller('craft')
export class CraftController {
  constructor(private readonly craftService: CraftService) {}

  @Get()
  findAll() {
    return this.craftService.findAll();
  }

  @Get('/create')
  create() {
    // console.log('CREATING...');
    return this.craftService.create().then();
  }
}
