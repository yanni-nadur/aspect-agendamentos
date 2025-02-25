import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Exam } from "./Exam";

@Entity({name: "appointments"})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Exam)
  @JoinColumn({ name: "exam_id" })
  exam: Exam;

  @Column("date", { name: "appointment_date" })
  appointmentDate: string;

  @Column({ nullable: true })
  notes: string;
}