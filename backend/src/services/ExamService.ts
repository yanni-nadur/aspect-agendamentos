import { ExamRepository } from "../repositories/ExamRepository";
import { Exam } from "../entities/Exam";

export class ExamService {
    private examRepository: ExamRepository;

    constructor() {
        this.examRepository = new ExamRepository();
    }

    async createExam(name: string, specialty: string): Promise<Exam> {
        if (!name || !specialty) {
            throw new Error("Nome e especialidade são obrigatórios.");
        }

        return this.examRepository.create({ name, specialty });
    }

    async getExamById(id: number): Promise<Exam> {
        const exam = await this.examRepository.findById(id);
        if (!exam) {
            throw new Error("Exame não encontrado.");
        }
        return exam;
    }

    async listExams(): Promise<Exam[]> {
        return this.examRepository.findAll();
    }
}
