const express = require('express');
const app = express();

app.use(express.json());

// rotas
app.use('/cardapio', require('./routes/cardapio'));
app.use('/comanda', require('./routes/comanda'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando na porta', PORT);
});
