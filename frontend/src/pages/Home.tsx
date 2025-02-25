import { Link } from "react-router-dom";
import { ExamList } from "../components/ExamList";

export const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-[90vh] rounded-xl bg-gray-900 text-white p-6">
			<header className="flex flex-col gap-y-6 mb-10">
				<h1 className="text-4xl font-bold">Gerenciamento de Agendamentos</h1>
				<p className="text-gray-400">Agende e visualize exames com facilidade.</p>
			</header>

			<main className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
				<h2 className="text-xl font-semibold text-center mb-4">Exames Disponíveis</h2>
				<ExamList />
			</main>

			<Link
				to="/appointments"
				className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all"
			>
				Ver Agendamentos
			</Link>
		</div>
	);
};
