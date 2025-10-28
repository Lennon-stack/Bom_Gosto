const express = require('express');
const router = express.Router();
const db = require('../db');

// 1) Listagem do cardápio ordenada por nome
router.get('/', (req, res) => {
  const stmt = db.prepare('SELECT cod_cardapio, nome, descricao, preco_unitario FROM Cardapio ORDER BY nome');
  const rows = stmt.all();
  res.json(rows);
});

// rota para obter um café por id (opcional)
router.get('/:id', (req, res) => {
  const stmt = db.prepare('SELECT * FROM Cardapio WHERE cod_cardapio = ?');
  const row = stmt.get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Não encontrado' });
  res.json(row);
});

module.exports = router;
