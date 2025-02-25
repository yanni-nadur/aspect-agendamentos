import { Request, Response } from "express";
import { AppointmentService } from "../services/AppointmentService";

export class AppointmentController {
    private appointmentService: AppointmentService;

    constructor() {
        this.appointmentService = new AppointmentService();
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { userId, examId, appointmentDate, notes } = req.body;

            if (!userId || !examId || !appointmentDate) {
                return res.status(400).json({ error: "Usuário, exame e data são obrigatórios." });
            }

            const appointment = await this.appointmentService.createAppointment(userId, examId, appointmentDate, notes);
            return res.status(201).json(appointment);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            const appointments = await this.appointmentService.listAppointments();
            return res.status(200).json(appointments);
        } catch (error) {
            console.error("Erro ao buscar agendamentos:", error);
            return res.status(500).json({ error: "Erro interno ao buscar agendamentos." });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const appointment = await this.appointmentService.getAppointmentById(Number(id));
    
            if (!appointment) {
                return res.status(404).json({ error: "Agendamento não encontrado." });
            }
    
            return res.json(appointment);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar agendamento." });
        }
    }
    
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
    
            if (isNaN(id)) {
                return res.status(400).json({ error: "ID do agendamento deve ser um número válido." });
            }
    
            const deleted = await this.appointmentService.deleteAppointment(id);
    
            if (!deleted) {
                return res.status(404).json({ error: "Agendamento não encontrado." });
            }
    
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: "Erro ao excluir agendamento." });
        }
    }
}
