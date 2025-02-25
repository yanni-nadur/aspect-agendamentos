import { createContext, useState, ReactNode, useContext } from "react";

const AppointmentContext = createContext({isExamAdded : false, toggleExamAdded : () => {} });

export const AppointmentProvider = ({ children }: { children: ReactNode }) => {
	const [isExamAdded, setIsExamAdded] = useState<boolean>(false);

	const toggleExamAdded = () => {
		setIsExamAdded(prev => !prev);
	};

	return (
		<AppointmentContext.Provider value={{ isExamAdded, toggleExamAdded }}>
			{children}
		</AppointmentContext.Provider>
	);
};

export const useAppointment = () => useContext(AppointmentContext);