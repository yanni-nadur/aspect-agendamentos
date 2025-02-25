import { AppRouter } from "./router";
import { AppointmentProvider } from "./context/AppointmentContext";


import './App.css'

function App() {

	return (
		<AppointmentProvider>
			<AppRouter />
		</AppointmentProvider>
	);
}

export default App;
