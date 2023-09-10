SELECT 
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região FROM estados as e, cidades as c
WHERE e.id = c.estado_id

SELECT
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
FROM estados as e
INNER JOIN cidades as c ON e.id = c.estado_id