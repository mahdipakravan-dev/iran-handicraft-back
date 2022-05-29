import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CraftService } from './craft.service';
import { CraftController } from './craft.controller';
import { Craft } from './craft.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Craft])],
  providers: [CraftService],
  controllers: [CraftController],
})
export class CraftModule {}
