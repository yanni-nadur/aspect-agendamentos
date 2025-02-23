import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  specialty: string;
}