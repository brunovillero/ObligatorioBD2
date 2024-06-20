CREATE DATABASE IF NOT EXISTS mydb;

USE mydb;

CREATE TABLE paises (
    nombre VARCHAR(100) NOT NULL,
    PRIMARY KEY (nombre)
);

CREATE TABLE fixtures (
    etapa VARCHAR(100) NOT NULL,
    PRIMARY KEY (etapa)
);

CREATE TABLE jugadores (
    id VARCHAR(8) NOT NULL,
    nombre VARCHAR(100),
    usuario VARCHAR(50),
    contrasena VARCHAR(255),
    mail VARCHAR(100) NOT NULL,
    puntaje INT DEFAULT 0,
    carrera VARCHAR(100) NOT NULL,
    campeon VARCHAR(100) NOT NULL,
    subcampeon VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (campeon) REFERENCES paises(nombre),
    FOREIGN KEY (subcampeon) REFERENCES paises(nombre),
    CHECK (mail REGEXP '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
);

CREATE TABLE partidos (
        id INT AUTO_INCREMENT,
        estadio VARCHAR(255),
        pais1 VARCHAR(255) NOT NULL,
        pais2 VARCHAR(255) NOT NULL,
        puntosPais1 INT DEFAULT NULL,
        puntosPais2 INT DEFAULT NULL,
        fecha DATETIME NOT NULL,
        etapa VARCHAR(100)  NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (pais1) REFERENCES paises(nombre),
        FOREIGN KEY (pais2) REFERENCES paises(nombre),
        FOREIGN KEY (etapa) REFERENCES fixtures(etapa)
    );

CREATE TABLE predicciones (
    id INT AUTO_INCREMENT,
    idPersona VARCHAR(8) NOT NULL,
    puntosPais1 INT NOT NULL,
    puntosPais2 INT NOT NULL,
    idPartido INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idPersona) REFERENCES jugadores(id),
    FOREIGN KEY (idPartido) REFERENCES partidos(id)
);







