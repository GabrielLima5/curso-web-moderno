INSERT INTO cidades(nome, area, estado_id)
VALUES('Campinas', 795, 31)

INSERT INTO cidades(nome, area, estado_id)
VALUES('Niterói', 133.9, 25)

INSERT INTO cidades(nome, area, estado_id)
VALUES ('Caruaru', 920.6, (SELECT id FROM estados WHERE sigla = 'PE'))

INSERT INTO cidades(nome, area, estado_id)
VALUES('Bento Gonçalves', 253.57, (SELECT id from estados WHERE sigla = 'RS'))

SELECT * FROM cidades