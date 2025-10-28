# ☕ Cafeteria BomGosto - Controle de Vendas

[![Node.js](https://img.shields.io/badge/Node.js-16.x-green)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

Projeto para controle de vendas de cafés da Cafeteria **BomGosto**, desenvolvido em **Node.js** com **Express** e **SQLite**.

O sistema permite:
- Cadastro do cardápio de cafés
- Registro de comandas de clientes
- Consulta detalhada das comandas
- Faturamento por data
- Controle de itens por comanda (evitando duplicidade)

---

## 📁 Estrutura do Projeto
BomGosto/

├── db/

│ ├── schema.sql                                 # Criação das tabelas

│ └── seed.sql                                   # Dados de exemplo

├── src/

│ ├── db.js                                      # Conexão com SQLite

│ ├── server.js                                  # Servidor Express

│ └── routes/

│ ├── cardapio.js

│ └── comanda.js

├── .gitignore

├── package.json

└── README.md

---

## 🛠️ Requisitos

- Node.js (v16 ou superior)
- npm
- SQLite (opcional, mas recomendado)

---

| Método | Rota      | Descrição            |
| ------ | --------- | -------------------- |
| GET    | /cardapio | Lista todos os cafés |
[
  { "cod_cardapio": 1, "nome": "Café Expresso", "descricao": "Café puro e forte", "preco_unitario": 5.0 },
  { "cod_cardapio": 2, "nome": "Café com Leite", "descricao": "Mistura de café e leite", "preco_unitario": 6.5 }
]
| Método | Rota                          | Descrição                            |
| ------ | ----------------------------- | ------------------------------------ |
| GET    | /comanda/detalhado            | Comandas com itens detalhados        |
| GET    | /comanda/totais               | Comandas com valor total             |
| GET    | /comanda/multi-tipos          | Comandas com mais de um tipo de café |
| GET    | /comanda/faturamento-por-data | Faturamento total por data           |
[
  {
    "cod_comanda": 1,
    "data_comanda": "2025-10-25",
    "mesa": 1,
    "nome_cliente": "Maria Silva",
    "cod_cardapio": 1,
    "nome_cafe": "Café Expresso",
    "descricao": "Café puro e forte",
    "quantidade": 2,
    "preco_unitario": 5.0,
    "preco_total_cafe": 10.0
  }
]
