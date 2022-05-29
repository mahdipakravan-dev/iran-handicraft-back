import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './city/city.module';
import { City } from './city/city.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'handicraft',
      entities: [City],
      logging: 'all',
      synchronize: true,
    }),
    CityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
