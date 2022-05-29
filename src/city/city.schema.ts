import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop(String)
  name: string;

  @Prop(String)
  desc: string;

  @Prop(String)
  address: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
