const express = require('express');
const router = express.Router();
const db = require('../db');

// 2) Todas as comandas e seus itens (detalhado)
router.get('/detalhado', (req, res) => {
  const sql = `
    SELECT 
      c.cod_comanda,
      c.data_comanda,
      c.mesa,
      c.nome_cliente,
      i.cod_cardapio,
      ca.nome AS nome_cafe,
      ca.descricao,
      i.quantidade,
      ca.preco_unitario,
      (i.quantidade * ca.preco_unitario) AS preco_total_cafe
    FROM Comanda c
    JOIN Item_Comanda i ON c.cod_comanda = i.cod_comanda
    JOIN Cardapio ca ON i.cod_cardapio = ca.cod_cardapio
    ORDER BY c.data_comanda, c.cod_comanda, ca.nome;
  `;
  const rows = db.prepare(sql).all();
  res.json(rows);
});

// 3) Comandas com valor total
router.get('/totais', (req, res) => {
  const sql = `
    SELECT 
      c.cod_comanda,
      c.data_comanda,
      c.mesa,
      c.nome_cliente,
      SUM(i.quantidade * ca.preco_unitario) AS valor_total_comanda
    FROM Comanda c
    JOIN Item_Comanda i ON c.cod_comanda = i.cod_comanda
    JOIN Cardapio ca ON i.cod_cardapio = ca.cod_cardapio
    GROUP BY c.cod_comanda, c.data_comanda, c.mesa, c.nome_cliente
    ORDER BY c.data_comanda;
  `;
  const rows = db.prepare(sql).all();
  res.json(rows);
});

// 4) Comandas com mais de um tipo de café
router.get('/multi-tipos', (req, res) => {
  const sql = `
    SELECT 
      c.cod_comanda,
      c.data_comanda,
      c.mesa,
      c.nome_cliente,
      SUM(i.quantidade * ca.preco_unitario) AS valor_total_comanda,
      COUNT(i.cod_cardapio) AS tipos_cafe
    FROM Comanda c
    JOIN Item_Comanda i ON c.cod_comanda = i.cod_comanda
    JOIN Cardapio ca ON i.cod_cardapio = ca.cod_cardapio
    GROUP BY c.cod_comanda, c.data_comanda, c.mesa, c.nome_cliente
    HAVING COUNT(i.cod_cardapio) > 1
    ORDER BY c.data_comanda;
  `;
  const rows = db.prepare(sql).all();
  res.json(rows);
});

// 5) Total de faturamento por data
router.get('/faturamento-por-data', (req, res) => {
  const sql = `
    SELECT 
      c.data_comanda,
      SUM(i.quantidade * ca.preco_unitario) AS faturamento_total
    FROM Comanda c
    JOIN Item_Comanda i ON c.cod_comanda = i.cod_comanda
    JOIN Cardapio ca ON i.cod_cardapio = ca.cod_cardapio
    GROUP BY c.data_comanda
    ORDER BY c.data_comanda;
  `;
  const rows = db.prepare(sql).all();
  res.json(rows);
});

module.exports = router;
