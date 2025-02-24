import { Request, Response } from "express";
import { ExamService } from "../services/ExamService";

export class ExamController {
    private examService: ExamService;

    constructor() {
    this.examService = new ExamService();
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, date } = req.body;
            const exam = await this.examService.createExam(name, date);
            return res.status(201).json(exam);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            const exams = await this.examService.listExams();
            return res.json(exams);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar exames." });
        }
    }
}
