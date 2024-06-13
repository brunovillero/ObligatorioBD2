CREATE DATABASE IF NOT EXISTS mydb;

USE mydb;

CREATE TABLE jugadores (
    id INT NOT NULL,
    nombre VARCHAR(100),
    usuario VARCHAR(50),
    contrasenia VARCHAR(255),
    mail VARCHAR(100) NOT NULL,
    puntaje INT DEFAULT 0,
    carrera VARCHAR(100) NOT NULL,
    campeon INT,
    subcampeon INT,
    PRIMARY KEY (id),
    CHECK (mail REGEXP '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
);

CREATE TABLE predicciones (
    id INT NOT NULL,
    puntosPais1 INT NOT NULL,
    puntosPais2 INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES jugadores(id)
);


CREATE TABLE paises (
    nombre VARCHAR(100) NOT NULL,
    PRIMARY KEY (nombre)
);

CREATE TABLE fixtures (
    etapa VARCHAR(100) NOT NULL,
    PRIMARY KEY (etapa)
);

/*CREATE TABLE Matches (
        Id INT AUTO_INCREMENT PRIMARY KEY,
        Stadium VARCHAR(255),
        Country1 INT NOT NULL,
        Country2 INT NOT NULL,
        Country1Score INT DEFAULT NULL,
        Country2Score INT DEFAULT NULL,
        Date DATETIME NOT NULL,
        FOREIGN KEY (country1) REFERENCES Country(Namee),
        FOREIGN KEY (country2) REFERENCES Country(Namee)
    );*/


INSERT INTO jugadores(id, nombre, usuario, contrasenia, mail, puntaje, carrera, campeon, subcampeon) VALUES (18458650, 'Elpri Mero', 'Mr1', 'contraseniasegura123', 'jhonny@gmail.com',
8, 'ciencias empresariales', 3, 9);