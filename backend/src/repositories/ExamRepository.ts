import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Exam } from "../entities/Exam";

export class ExamRepository {
	private repo: Repository<Exam>;

	constructor() {
		this.repo = AppDataSource.getRepository(Exam);
	}

	async create(examData: Partial<Exam>): Promise<Exam> {
		const exam = this.repo.create(examData);
		await this.repo.save(exam);
		return exam;
	}

	async findById(id: number): Promise<Exam | null> {
		return this.repo.findOneBy({ id });
	}

	async findAll(): Promise<Exam[]> {
		return this.repo.find();
	}
}