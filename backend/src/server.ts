import express from 'express';
import { Request, Response } from "express";
import cors from 'cors';
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import { routes } from "./routes/routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3210;

app.use(cors());
app.use(express.json());
app.use(routes);

AppDataSource.initialize()
  .then(async () => {
    console.log("Conexão com o database OK");

    app.listen(port, () => {
      console.log(`Server rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar com o database:", error);
  });

app.get('/', (req : Request, res : Response) => {
  res.send('API de Agendamentos funcionando.');
});

