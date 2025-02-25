import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Appointment } from "../pages/Appointment";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/appointments" element={<Appointment />} />
			</Routes>
		</BrowserRouter>
	);
};