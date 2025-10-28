const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

// Caminho do banco de dados
const dbPath = path.join(__dirname, "../db/bomgosto.db");
const db = new Database(dbPath);

// Lê o schema (estrutura das tabelas)
const schema = fs.readFileSync(path.join(__dirname, "../db/schema.sql"), "utf8");

// Lê o seed (dados iniciais)
let seed = fs.readFileSync(path.join(__dirname, "../db/seed.sql"), "utf8");

// 👉 Substitui "INSERT INTO" por "INSERT OR IGNORE INTO"
// Assim evita erro de duplicidade caso já tenha registros
seed = seed.replace(/INSERT INTO/g, "INSERT OR IGNORE INTO");

// Cria as tabelas
db.exec(schema);

// Insere os dados iniciais
db.exec(seed);

console.log("✅ Banco de dados inicializado com sucesso!");

db.close();
