import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class City {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  image: string;
}
