import { api } from "./api";

export const getAppointments = async () => {
	const response = await api.get("/appointments");
	return response.data;
};

export const createAppointment = async (data: {
	userId: number;
	examId: number;
	appointmentDate: string;
	notes?: string;
}) => {
	const response = await api.post("/appointments", data);
	return response.data;
};

export const deleteAppointment = async (id: number) => {
	await api.delete(`/appointments/${id}`);
};