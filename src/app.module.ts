import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './city/city.module';
import { City } from './city/city.entity';
import { CraftModule } from './craft/craft.module';
import { Craft } from './craft/craft.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'handicraft',
      entities: [City, Craft],
      logging: 'all',
      synchronize: true,
    }),
    CityModule,
    CraftModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
