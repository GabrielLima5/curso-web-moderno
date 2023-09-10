INSERT INTO empresas(nome, cnpj)
    VALUES
        ('Bradesco', 78030989000173),
        ('Vale', 50314276000112),
        ('Cielo', 17149992000116)

ALTER TABLE empresas MODIFY cnpj VARCHAR(14)
DESC empresas

INSERT INTO empresas_unidades(empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1)