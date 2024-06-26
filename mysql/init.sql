CREATE DATABASE IF NOT EXISTS mydb;

USE mydb;

-- Crear tabla paises
CREATE TABLE paises (
    nombre VARCHAR(100) NOT NULL,
    PRIMARY KEY (nombre)
);

-- Crear tabla fixtures
CREATE TABLE fixtures (
    etapa VARCHAR(100) NOT NULL,
    PRIMARY KEY (etapa)
);

-- Crear tabla jugadores
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

-- Crear tabla partidos
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

-- Inserccion de paises
INSERT INTO paises (nombre) VALUES 
('Uruguay'),
('Argentina'),
('Estados Unidos'),
('Colombia'),
('Venezuela'),
('México'),
('Canadá'),
('Brasil'),
('Chile'),
('Costa Rica'),
('Perú'),
('Ecuador'),
('Paraguay'),
('Jamaica'),
('Panamá'),
('Bolivia');

-- Insercion fixtures
INSERT INTO fixtures (etapa) VALUES
('Final'),
('Tercer y Cuarto Puesto'),
('Semifinal'),
('Cuartos de Final'),
('Fase de Grupos');

-- Insercion de partidos
INSERT INTO partidos (etapa, estadio, pais1, pais2, puntosPais1, puntosPais2, fecha) VALUES 
('Final', 'Mercedes-Benz Stadium', 'Uruguay', 'Argentina', NULL, NULL, '2024-07-15 18:00:00'),
('Semifinal', 'Allegiant Stadium', 'Uruguay', 'Colombia', NULL, NULL, '2024-07-10 18:00:00'),
('Semifinal', 'AT&T Stadium', 'Argentina', 'Estados Unidos', NULL, NULL, '2024-07-11 18:00:00'),
('Cuartos de Final', 'Bank of America Stadium', 'Uruguay', 'Brasil', NULL, NULL, '2024-07-05 18:00:00'),
('Cuartos de Final', 'Children\'s Mercy Park', 'Argentina', 'Canadá', NULL, NULL, '2024-07-06 18:00:00'),
('Cuartos de Final', 'Inter&Co Stadium', 'Estados Unidos', 'México', NULL, NULL, '2024-07-07 18:00:00'),
('Cuartos de Final', 'GEHA Field at Arrowhead Stadium', 'Colombia', 'Venezuela', NULL, NULL, '2024-07-08 18:00:00'),
('Tercer y Cuarto Puesto', 'Hard Rock Stadium', 'Estados Unidos', 'Colombia', NULL, NULL, '2024-07-13 18:00:00'),
('Fase de Grupos', 'Levi\'s Stadium', 'Uruguay', 'Argentina', NULL, NULL, '2024-06-20 18:00:00'),
('Fase de Grupos', 'MetLife Stadium', 'Estados Unidos', 'Colombia', NULL, NULL, '2024-06-21 18:00:00'),
('Fase de Grupos', 'NRG Stadium', 'Venezuela', 'México', NULL, NULL, '2024-06-22 18:00:00'),
('Fase de Grupos', 'Q2 Stadium', 'Canadá', 'Brasil', NULL, NULL, '2024-06-23 18:00:00'),
('Fase de Grupos', 'SoFi Stadium', 'Chile', 'Costa Rica', NULL, NULL, '2024-06-24 18:00:00'),
('Fase de Grupos', 'State Farm Stadium', 'Perú', 'Ecuador', NULL, NULL, '2024-06-25 18:00:00'),
('Fase de Grupos', 'Allegiant Stadium', 'Paraguay', 'Jamaica', NULL, NULL, '2024-06-26 18:00:00'),
('Fase de Grupos', 'AT&T Stadium', 'Panamá', 'Bolivia', NULL, NULL, '2024-06-27 18:00:00'),
('Fase de Grupos', 'Bank of America Stadium', 'Uruguay', 'Estados Unidos', NULL, NULL, '2024-06-28 18:00:00'),
('Fase de Grupos', 'Children\'s Mercy Park', 'Argentina', 'Colombia', NULL, NULL, '2024-06-29 18:00:00'),
('Fase de Grupos', 'Inter&Co Stadium', 'Venezuela', 'Canadá', NULL, NULL, '2024-06-30 18:00:00'),
('Fase de Grupos', 'GEHA Field at Arrowhead Stadium', 'México', 'Brasil', NULL, NULL, '2024-07-01 18:00:00'),
('Fase de Grupos', 'Hard Rock Stadium', 'Chile', 'Perú', NULL, NULL, '2024-07-02 18:00:00'),
('Fase de Grupos', 'Levi\'s Stadium', 'Costa Rica', 'Ecuador', NULL, NULL, '2024-07-03 18:00:00'),
('Fase de Grupos', 'MetLife Stadium', 'Paraguay', 'Panamá', NULL, NULL, '2024-07-04 18:00:00'),
('Fase de Grupos', 'NRG Stadium', 'Jamaica', 'Bolivia', NULL, NULL, '2024-07-05 18:00:00'),
('Fase de Grupos', 'Q2 Stadium', 'Uruguay', 'Colombia', NULL, NULL, '2024-07-06 18:00:00'),
('Fase de Grupos', 'SoFi Stadium', 'Argentina', 'Estados Unidos', NULL, NULL, '2024-07-07 18:00:00'),
('Fase de Grupos', 'State Farm Stadium', 'Venezuela', 'Brasil', NULL, NULL, '2024-07-08 18:00:00'),
('Fase de Grupos', 'Allegiant Stadium', 'México', 'Canadá', NULL, NULL, '2024-07-09 18:00:00'),
('Fase de Grupos', 'AT&T Stadium', 'Chile', 'Ecuador', NULL, NULL, '2024-07-10 18:00:00'),
('Fase de Grupos', 'Bank of America Stadium', 'Costa Rica', 'Perú', NULL, NULL, '2024-07-11 18:00:00'),
('Fase de Grupos', 'Children\'s Mercy Park', 'Paraguay', 'Bolivia', NULL, NULL, '2024-07-12 18:00:00'),
('Fase de Grupos', 'Inter&Co Stadium', 'Jamaica', 'Panamá', NULL, NULL, '2024-07-13 18:00:00');
