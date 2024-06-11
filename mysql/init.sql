CREATE DATABASE IF NOT EXISTS mydb;

USE mydb;

CREATE TABLE Players (
    ID INT NOT NULL,
    Namee VARCHAR(100),
    Username VARCHAR(50),
    Password VARCHAR(255),
    Email VARCHAR(100) NOT NULL,
    Points INT DEFAULT 0,
    Major VARCHAR(100) NOT NULL,
    Champion INT,
    SubChampion INT,
    PRIMARY KEY (ID),
    CHECK (Email REGEXP '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
);

CREATE TABLE Predictions (
    ID INT NOT NULL,
    CountryScore1 INT NOT NULL,
    CountryScore2 INT NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (ID) REFERENCES Players(ID)
);


CREATE TABLE Countries (
    Namee VARCHAR(100) NOT NULL,
    PRIMARY KEY (Namee)
);

CREATE TABLE Fixture (
    Stage VARCHAR(100) NOT NULL,
    PRIMARY KEY (Stage)
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


INSERT INTO Players(ID, Namee, Username, Password, Email, Points, Major, Champion, SubChampion) VALUES (18458650, 'Elpri Mero', 'Mr1', 'contraseniasegura123', 'jhonny@gmail.com',
8, 'ciencias empresariales', 3, 9);