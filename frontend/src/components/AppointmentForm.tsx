import { useEffect, useState } from "react";
import { createAppointment } from "../services/appointmentService";
import { useAppointment } from "../context/AppointmentContext";
import { getExams } from "../services/examService";
import { getUsers } from "../services/userService";
import { Exam, User } from "../types";


export const AppointmentForm = () => {
	const [exams, setExams] = useState<Exam[]>([]);
	const [users, setUsers] = useState<User[]>([]);
	const [userId, setUserId] = useState("");
	const [examId, setExamId] = useState("");
	const [appointmentDate, setAppointmentDate] = useState("");
	const [notes, setNotes] = useState("");
	const {toggleExamAdded} = useAppointment();

	useEffect(() => {
		const fetchData = async () => {
			const examsData = await getExams();
			const usersData = await getUsers();
			setExams(examsData);
			setUsers(usersData);
		};

		fetchData();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		console.log("Enviando agendamento com os valores:");
		console.log({ userId, examId, appointmentDate, notes });


		try {
			await createAppointment({
				userId: Number(userId),
				examId: Number(examId),
				appointmentDate,
				notes
			});

			toggleExamAdded();

			alert("Agendamento criado!");
		} catch (error) {
			console.error("Erro ao agendar exame:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-y-6 bg-white rounded-2xl h-[80vh] text-black p-10 shadow-lg">
			<h2 className="text-xl font-semibold text-center">Agendar Exame</h2>

			<label className="flex flex-col">
				Usuário:
				<select className="border rounded p-2" value={userId} onChange={(e) => setUserId(e.target.value)} required>
					<option value="">Selecione um usuário</option>
					{users.map((user) => (
						<option key={user.id} value={user.id}>
							{user.name}
						</option>
					))}
				</select>
			</label>

			<label className="flex flex-col">
				Tipo de Exame:
				<select className="border rounded p-2" value={examId} onChange={(e) => setExamId(e.target.value)} required>
					<option value="">Selecione um exame</option>
					{exams.map((exam) => (
						<option key={exam.id} value={exam.id}>
							{exam.name}
						</option>
					))}
				</select>
			</label>

			<label className="flex flex-col">
				Data do Agendamento:
				<input className="border rounded p-2" type="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required />
			</label>

			<label className="flex flex-col">
				Observações:
				<textarea className="border rounded p-2" value={notes} onChange={(e) => setNotes(e.target.value)} />
			</label>

			<button type="submit" className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
				Agendar
			</button>
		</form>
	);
};
