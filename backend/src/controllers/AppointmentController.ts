import { Request, Response } from "express";
import { AppointmentService } from "../services/AppointmentService";

export class AppointmentController {
    private appointmentService: AppointmentService;

    constructor() {
    this.appointmentService = new AppointmentService();
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { userId, examId, appointmentDate } = req.body;
            const appointment = await this.appointmentService.createAppointment(userId, examId, appointmentDate);
            return res.status(201).json(appointment);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            const appointments = await this.appointmentService.listAppointments();
            return res.json(appointments);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar agendamentos." });
        }
    }
}