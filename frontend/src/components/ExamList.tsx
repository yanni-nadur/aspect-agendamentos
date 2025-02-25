import { useEffect, useState } from "react";
import { getExams } from "../services/examService";
import { Exam } from "../types";

export const ExamList = () => {
	const [exams, setExams] = useState<Exam[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);


	useEffect(() => {
		const fetchExams = async () => {
			try {
				const data = await getExams();
				setExams(data);
			} catch (error) {
				setError("Erro ao carregar exames. Tente novamente.");
			} finally {
				setLoading(false);
			}
		};

		fetchExams();
	}, []);

	if (loading) return <p>Carregando exames...</p>;
	if (error) return <p className="text-red-600">{error}</p>;
	if (exams.length === 0) return <p>Nenhum exame disponível.</p>;

	return (
		<div>
			<ul>
				{exams.map((exam) => (
					<li key={exam.id}>
						<strong>{exam.name}</strong> - {exam.specialty}
					</li>
				))}
			</ul>
		</div>
	);
};
