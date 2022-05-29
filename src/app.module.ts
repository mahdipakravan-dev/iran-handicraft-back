import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CityModule } from './city/city.module';
import { CraftModule } from './craft/craft.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/handicraft'),
    CityModule,
    CraftModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
