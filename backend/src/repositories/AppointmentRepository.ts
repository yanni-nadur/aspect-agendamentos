import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Appointment } from "../entities/Appointment";

export class AppointmentRepository {
	private repo: Repository<Appointment>;

	constructor() {
	this.repo = AppDataSource.getRepository(Appointment);
	}

	async create(appointmentData: Partial<Appointment>): Promise<Appointment> {
		const appointment = this.repo.create(appointmentData);
		await this.repo.save(appointment);
		return appointment;
	}

	async findById(id: number): Promise<Appointment | null> {
		return this.repo.findOneBy({ id });
	}

	async findAll(): Promise<Appointment[]> {
		return this.repo.find();
	}

	async delete(id: number): Promise<void> {
		await this.repo.delete(id);
	}

	async deleteById(id: number): Promise<boolean> {
		const result = await this.repo.delete(id);
		return result.affected !== 0;
	}
}