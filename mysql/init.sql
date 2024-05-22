CREATE DATABASE IF NOT EXISTS mydb;

USE mydb;

CREATE TABLE Players (
    CI INT NOT NULL,
    Nombre VARCHAR(100),
    Usuario VARCHAR(50),
    Contraseña VARCHAR(255),
    Correo VARCHAR(100) NOT NULL,
    Puntaje INT DEFAULT 0,
    Carrera VARCHAR(100) NOT NULL,
    Campeon INT,
    Subcampeon INT,
    PRIMARY KEY (CI),
    FOREIGN KEY (Campeon) REFERENCES OtroTabla(CampoCampeon),
    FOREIGN KEY (Subcampeon) REFERENCES OtroTabla(CampoSubcampeon),
    CHECK (Correo REGEXP '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
);

INSERT INTO Players VALUES (18458650, 'Elpri Mero', 'Mr1', 'contraseñasegura123', 'jhonny@gmail.com',
8, 'ciencias empresariales', 3, 9);


