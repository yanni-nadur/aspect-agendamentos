import { useEffect, useState } from "react";
import { getExams } from "../services/examService";
import { getAppointments } from "../services/appointmentService";

export const TestAPI = () => {
  const [exams, setExams] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const examsData = await getExams();
        const appointmentsData = await getAppointments();

        console.log(appointmentsData);

        setExams(examsData || []);
        setAppointments(appointmentsData || []);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>Exames:</h2>
      <ul>
        {exams.length > 0 ? (
          exams.map((exam) => (
            <li key={exam.id}>
              {exam.name} - {exam.specialty}
            </li>
          ))
        ) : (
          <p>Nenhum exame encontrado.</p>
        )}
      </ul>

      <h2>Agendamentos:</h2>
      <ul>
        {appointments.length > 0 ? (
          appointments.map((appt) => (
            <li key={appt.id}>
              {appt.exam ? `${appt.exam.name} - ${appt.user.name} - ${appt.appointmentDate} - ${appt.notes}` : "Dados do exame não encontrados"}
            </li>
          ))
        ) : (
          <p>Nenhum agendamento encontrado.</p>
        )}
      </ul>
    </div>
  );
};
