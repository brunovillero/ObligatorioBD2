const db = require("../mysqlConnection");

// Definir la tabla País con su única columna Nombre
const createPaisTable = `
    CREATE TABLE IF NOT EXISTS Countries (
        Name VARCHAR(255) NOT NULL,
        PRIMARY KEY (Name)
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