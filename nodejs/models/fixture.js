const db = require("../mysqlConnection");

// Definir la tabla Stages con su única columna Nombre
const createFixtureTable = `
    CREATE TABLE IF NOT EXISTS fixtures (
        etapa VARCHAR(100) NOT NULL,
        PRIMARY KEY (Stage)
    )
`;

// Crear la tabla Stages en la base de datos si no existe
db.query(createFixtureTable, (err, results) => {
    if (err) {
        console.error('Error creating stage table:', err);
    } else {
        console.log('Stage table created successfully');
    }
});

module.exports = db;