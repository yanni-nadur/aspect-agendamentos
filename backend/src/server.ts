import express from 'express';
import cors from 'cors';

const app = express();
const port = 3210;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de Agendamentos funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});