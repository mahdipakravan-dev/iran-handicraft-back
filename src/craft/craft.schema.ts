import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { City } from '../city/city.schema';

export type CraftDocument = Craft & Document;

@Schema()
export class Craft {
  @Prop()
  title: string;

  @Prop()
  desc: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'City' })
  city: City | string;
}

export const CraftSchema = SchemaFactory.createForClass(Craft);
