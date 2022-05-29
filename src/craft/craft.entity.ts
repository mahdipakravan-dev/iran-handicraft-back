import { Column, Entity, ObjectID, ObjectIdColumn, OneToOne } from 'typeorm';
import { City } from '../city/city.entity';
import { JoinColumn } from 'typeorm/browser';

@Entity()
export class Craft {
  @ObjectIdColumn()
  id: ObjectID;

  @OneToOne(() => City, (city) => city.id)
  city: City | string;

  @Column()
  name: string;

  @Column()
  description: string;
}
