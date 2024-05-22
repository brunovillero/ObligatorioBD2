const db = require('../config/database');

// Definir la tabla País con su única columna Nombre
const createPaisTable = `
    CREATE TABLE IF NOT EXISTS Pais (
        PaisID INT AUTO_INCREMENT PRIMARY KEY,
        Nombre VARCHAR(255) NOT NULL
    )
`;

// Crear la tabla País en la base de datos si no existe
db.query(createPaisTable, (err, results) => {
    if (err) {
        console.error('Error creating Pais table:', err);
    } else {
        console.log('Pais table created successfully');
    }
});

module.exports = db;