import express from "express";
import cors from "cors";
import "dotenv/config";
import { AppDataSource } from "./data-source";
import { routes } from "./routes/routes";
import { Request, Response } from "express"; // Certifique-se de importar Request e Response

const app = express();
const port = process.env.PORT || 3210;

app.use(cors());
app.use(express.json());
app.use(routes);

const startServer = async () => {
	try {
		await AppDataSource.initialize();
		console.log("Conexão com o banco de dados estabelecida!");

		app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
	} catch (error) {
		console.error("Erro ao conectar com o banco de dados:", error);
	}
};

startServer();

app.get("/", (req: Request, res: Response) => {
	res.send("API de Agendamentos funcionando.");
});