import { api } from "./api";

export const getExams = async () => {
	const response = await api.get("/exams");
	return response.data;
};