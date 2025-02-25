export type Exam = {
	id: number;
	name: string;
	specialty: string;
};
  
export type User = {
	id: number;
	name: string;
};

export type Appointment = {
	id: number;
	user: User;
	exam: Exam;
	appointmentDate: string;
	notes?: string;
};