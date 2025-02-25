import { useEffect, useState } from "react";
import { getAppointments, deleteAppointment } from "../services/appointmentService";
import { Appointment } from "../types";
import { useAppointment } from "../context/AppointmentContext";


export const AppointmentList = () => {
	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [loading, setLoading] = useState(true);
	const [deleting, setDeleting] = useState(false);
	const {isExamAdded, toggleExamAdded} = useAppointment();

	const fetchAppointments = async () => {
		try {
			const data = await getAppointments();
			setAppointments(data);
		} catch (error) {
			console.error("Erro ao buscar agendamentos:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchAppointments();
	}, []);

	useEffect(() => {
		if(isExamAdded){
			fetchAppointments();
		}
	}, [isExamAdded]);

	useEffect(() => {
		if(deleting){
			setDeleting(false);
		}else{
			toggleExamAdded();
		}
	}, [appointments]);

	const handleDelete = async (id: number) => {
		if (!confirm("Tem certeza que deseja excluir este agendamento?")) return;

		try {
			setDeleting(true);
			await deleteAppointment(id);
			fetchAppointments();
		} catch (error) {
			console.error("Erro ao excluir agendamento:", error);
			alert("Erro ao excluir. Tente novamente.");
		}
	};

	return (
		<div className="bg-white rounded-2xl p-6 shadow-lg text-black w-full max-w-3xl mx-auto">
			<h2 className="text-xl font-semibold text-center mb-4">Lista de Agendamentos</h2>

			{loading ? (
				<p className="text-center">Carregando agendamentos...</p>
			) : appointments.length === 0 ? (
				<p className="text-center text-gray-500">Nenhum agendamento encontrado.</p>
			) : (
				<ul className="space-y-4">
					{appointments.map((appt) => (
						<li key={appt.id} className="flex justify-between items-start p-4 rounded-xl text-black bg-white border-2 border-black">
							<div className="text-left">
								<p className="font-medium">{appt.exam.name}</p>
								<p className="text-sm">{appt.user.name} - {appt.appointmentDate}</p>
								{appt.notes && 
									<p className="mt-6">Obs: {appt.notes}</p>
								}
							</div>

							<button 
								onClick={() => handleDelete(appt.id)} 
								className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer"
							>
								Excluir
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
