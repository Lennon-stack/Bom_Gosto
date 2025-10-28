const Database = require('better-sqlite3');
const db = new Database('./db/bomgosto.db', { verbose: console.log });

module.exports = db;
