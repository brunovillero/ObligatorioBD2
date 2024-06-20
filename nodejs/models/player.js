const db = require("../mysqlConnection");

// Create the Jugador table if it doesn't exist
const createPlayerTable = `
    CREATE TABLE IF NOT EXISTS jugadores (
        nombre VARCHAR(255) NOT NULL,
        usuario VARCHAR(255) NOT NULL,
        contrasena VARCHAR(255) NOT NULL,
        mail VARCHAR(100) NOT NULL CHECK (Email LIKE '%_@__%.__%'),
        id VARCHAR(20) NOT NULL PRIMARY KEY,
        puntos INT DEFAULT 0,
        carrera VARCHAR(255) NOT NULL,
        campeon VARCHAR(20),
        subcampeon VARCHAR(20),
        FOREIGN KEY (campeon) REFERENCES paises(nombre),
        FOREIGN KEY (subcampeon) REFERENCES paises(nombre)
    )
`;

db.query(createPlayerTable, (err, results) => {
    if (err) {
        console.error('Error creating player table:', err);
    } else {
        console.log('player table created successfully');
    }
});

module.exports = db;