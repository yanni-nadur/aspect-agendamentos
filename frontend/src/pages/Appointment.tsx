import { AppointmentList } from "../components/AppointmentList";
import { AppointmentForm } from "../components/AppointmentForm";
import { BackToHome } from "../components/BackToHome";

export const Appointment = () => {
	return (
		<div className="p-6 flex flex-col gap-6">
			<BackToHome />
			<h1 className="text-2xl font-bold text-center">Gerenciamento de Agendamentos</h1>

			<div className="grid md:grid-cols-2 gap-10">
				<AppointmentForm />
				<AppointmentList />
			</div>
		</div>
	);
};
