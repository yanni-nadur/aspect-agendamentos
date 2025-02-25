import { Request, Response } from "express";
import { ExamService } from "../services/ExamService";

export class ExamController {
    private examService: ExamService;

    constructor() {
        this.examService = new ExamService();
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, specialty } = req.body;
    
            if (!name || !specialty) {
                return res.status(400).json({ error: "Nome e especialidade são obrigatórios." });
            }
    
            const exam = await this.examService.createExam(name, specialty);
            return res.status(201).json(exam);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            const exams = await this.examService.listExams();
            return res.status(200).json(exams);
        } catch (error) {
            console.error("Erro ao buscar exames:", error);
            return res.status(500).json({ error: "Erro interno ao buscar exames." });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const exam = await this.examService.getExamById(Number(id));
    
            if (!exam) {
                return res.status(404).json({ error: "Exame não encontrado." });
            }
    
            return res.json(exam);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar exame." });
        }
    }
}
