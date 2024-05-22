CREATE DATABASE IF NOT EXISTS mydb;

USE mydb;

CREATE TABLE Players (
    CI INT NOT NULL,
    Nombre VARCHAR(100),
    Usuario VARCHAR(50),
    Contrasenia VARCHAR(255),
    Correo VARCHAR(100) NOT NULL,
    Puntaje INT DEFAULT 0,
    Carrera VARCHAR(100) NOT NULL,
    Campeon INT,
    Subcampeon INT,
    PRIMARY KEY (CI),
    /*FOREIGN KEY (Campeon) REFERENCES Pais(ESTO SE VA A CAMBIAR)
    FOREIGN KEY (Subcampeon) REFERENCES Pais(ESTO SE VA A CAMBIAR)*/
    CHECK (Correo REGEXP '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
);

INSERT INTO Players(CI, Nombre, Usuario, Contrasenia, Correo, Puntaje, Carrera, Campeon, Subcampeon) VALUES (18458650, 'Elpri Mero', 'Mr1', 'contraseniasegura123', 'jhonny@gmail.com',
8, 'ciencias empresariales', 3, 9);