import { Module } from '@nestjs/common';
import { CraftService } from './craft.service';
import { CraftController } from './craft.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Craft, CraftSchema } from './craft.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Craft.name,
        schema: CraftSchema,
      },
    ]),
  ],
  controllers: [CraftController],
  providers: [CraftService],
})
export class CraftModule {}
