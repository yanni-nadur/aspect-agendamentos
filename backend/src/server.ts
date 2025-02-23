import express from 'express';
import cors from 'cors';
import { AppDataSource } from "./data-source";

const app = express();
const port = 3210;

app.use(cors());
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o database OK");

    app.listen(port, () => {
      console.log(`Server rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar com o database:", error);
  });

app.get('/', (req, res) => {
  res.send('API de Agendamentos funcionando.');
});

