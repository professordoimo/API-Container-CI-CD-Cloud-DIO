const express = require('express');
const app = express();
// A porta é definida por variável de ambiente, padrão 8080 para Docker
const PORT = process.env.PORT || 8080; 

app.use(express.json());

// Rota 1: Rota de saúde (Health Check)
app.get('/', (req, res) => {
  res.status(200).send({
    message: 'API DIO está online e funcionando!',
    ambiente: process.env.NODE_ENV || 'Produção Padrão',
    version: '1.0.0'
  });
});

// Rota 2: Exemplo simples
app.get('/api/mensagem', (req, res) => {
  res.status(200).send({
    data: 'Esta é a sua API implantada com sucesso na Nuvem!',
    date: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
