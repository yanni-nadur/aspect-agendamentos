import { useNavigate } from "react-router-dom";

export const BackToHome = () => {
	const navigate = useNavigate();

	return (
		<button 
			onClick={() => navigate("/")} 
			className="w-fit px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
		>
			Voltar para Home
		</button>
	);
};