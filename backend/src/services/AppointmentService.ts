import { AppointmentRepository } from "../repositories/AppointmentRepository";
import { UserRepository } from "../repositories/UserRepository";
import { ExamRepository } from "../repositories/ExamRepository";
import { Appointment } from "../entities/Appointment";

export class AppointmentService {
    private appointmentRepository: AppointmentRepository;
    private userRepository: UserRepository;
    private examRepository: ExamRepository;

    constructor() {
        this.appointmentRepository = new AppointmentRepository();
        this.userRepository = new UserRepository();
        this.examRepository = new ExamRepository();
    }

    async createAppointment(userId: number, examId: number, appointmentDate: string, notes?: string): Promise<Appointment> {
        const user = await this.userRepository.findById(userId);
        if (!user) throw new Error("Usuário não encontrado.");

        const exam = await this.examRepository.findById(examId);
        if (!exam) throw new Error("Exame não encontrado.");

        return this.appointmentRepository.create({ user, exam, appointmentDate, notes });
    }

    async getAppointmentById(id: number): Promise<Appointment | null> {
        return this.appointmentRepository.findById(id);
    }

    async listAppointments(): Promise<Appointment[]> {
        return this.appointmentRepository.findAll();
    }

    async deleteAppointment(id: number): Promise<boolean> {
        return this.appointmentRepository.deleteById(id);
    }
}