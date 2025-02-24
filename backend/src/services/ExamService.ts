import { ExamRepository } from "../repositories/ExamRepository";
import { Exam } from "../entities/Exam";

export class ExamService {
    private examRepository: ExamRepository;

    constructor () {
        this.examRepository = new ExamRepository();
    }

    async createExam(name: string, specialty: string): Promise<Exam> {
        return this.examRepository.create({ name, specialty });
    }
    
    async getExamById(id: number): Promise<Exam | null> {
        return this.examRepository.findById(id);
    }

    async listExams(): Promise<Exam[]> {
        return this.examRepository.findAll();
    }
}