PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS Cardapio (
    cod_cardapio INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT UNIQUE NOT NULL,
    descricao TEXT,
    preco_unitario NUMERIC NOT NULL
);

CREATE TABLE IF NOT EXISTS Comanda (
    cod_comanda INTEGER PRIMARY KEY AUTOINCREMENT,
    data_comanda DATE NOT NULL,
    mesa INTEGER NOT NULL,
    nome_cliente TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Item_Comanda (
    cod_comanda INTEGER NOT NULL,
    cod_cardapio INTEGER NOT NULL,
    quantidade INTEGER NOT NULL CHECK (quantidade > 0),
    PRIMARY KEY (cod_comanda, cod_cardapio),
    FOREIGN KEY (cod_comanda) REFERENCES Comanda(cod_comanda) ON DELETE CASCADE,
    FOREIGN KEY (cod_cardapio) REFERENCES Cardapio(cod_cardapio)
);
