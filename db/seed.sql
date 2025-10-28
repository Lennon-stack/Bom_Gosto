-- cardapio
INSERT INTO Cardapio (nome, descricao, preco_unitario) VALUES
('Café Expresso', 'Café puro e forte', 5.00),
('Café com Leite', 'Mistura de café e leite vaporizado', 6.50),
('Capuccino', 'Café, leite e chocolate em pó', 7.50),
('Mocha', 'Café, chocolate e chantilly', 8.00);

-- comandas
INSERT INTO Comanda (data_comanda, mesa, nome_cliente) VALUES
('2025-10-25', 1, 'Lennon Alves'),
('2025-10-25', 2, 'John Silva'),
('2025-10-26', 3, 'Clisciane Schmitt');

-- itens
INSERT INTO Item_Comanda (cod_comanda, cod_cardapio, quantidade) VALUES
(1, 1, 2),
(1, 2, 1),
(2, 3, 1),
(3, 1, 1),
(3, 4, 1);
