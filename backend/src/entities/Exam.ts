import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "exams"})

export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  specialty: string;
}