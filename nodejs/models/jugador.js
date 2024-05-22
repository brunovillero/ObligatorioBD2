const db = require('../config/database'); //despues hay que cambiar a la ruta de la base de datos

// Create the Jugador table if it doesn't exist
const createJugadorTable = `
    CREATE TABLE IF NOT EXISTS Jugador (
        Nombre VARCHAR(255) NOT NULL,
        Usuario VARCHAR(255) NOT NULL,
        Contraseña VARCHAR(255) NOT NULL,
        Correo VARCHAR(100) NOT NULL CHECK (Correo LIKE '%_@__%.__%'),
        CI VARCHAR(20) NOT NULL PRIMARY KEY,
        Puntaje INT DEFAULT 0,
        Carrera VARCHAR(255) NOT NULL,
        Campeon VARCHAR(20),
        Subcampeon VARCHAR(20),
        FOREIGN KEY (Campeon) REFERENCES Pais(Nombre),
        FOREIGN KEY (Subcampeon) REFERENCES Pais(Nombre)
    )
`;

db.query(createJugadorTable, (err, results) => {
    if (err) {
        console.error('Error creating Jugador table:', err);
    } else {
        console.log('Jugador table created successfully');
    }
});

module.exports = db;