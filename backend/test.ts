import "reflect-metadata";
import { AppDataSource } from "./src/data-source";
import { UserService } from "./src/services/UserService";
import { ExamService } from "./src/services/ExamService";
import { AppointmentService } from "./src/services/AppointmentService";

async function test() {
    await AppDataSource.initialize(); // Inicializa a conexão com o banco

    const userService = new UserService();
    const examService = new ExamService();
    const appointmentService = new AppointmentService();

    const user = await userService.createUser("João Silva", "joao@email.com");
    console.log("Usuário criado:", user);

    const exam = await examService.createExam("Hemograma", "2025-03-01");
    console.log("Exame criado:", exam);

    const appointment = await appointmentService.createAppointment(user.id, exam.id, "2025-03-05");
    console.log("Agendamento criado:", appointment);
}

test();
