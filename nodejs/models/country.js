const db = require("../mysqlConnection");

// Definir la tabla País con su única columna Nombre
const createPaisTable = `
    CREATE TABLE IF NOT EXISTS paises (
        nombre VARCHAR(255) NOT NULL,
        PRIMARY KEY (nombre)
    )
`;

// Crear la tabla País en la base de datos si no existe
db.query(createPaisTable, (err, results) => {
    if (err) {
        console.error('Error creating Country table:', err);
    } else {
        console.log('Country table created successfully');
    }
});

module.exports = db;