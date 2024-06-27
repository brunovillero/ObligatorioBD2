const db = require("../mysqlConnection");

// Create the Match table if it doesn't exist
const createPartidoTable = `
    CREATE TABLE IF NOT EXISTS partidos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        estadio VARCHAR(255) NOT NULL,
        pais1 VARCHAR(255) NOT NULL,
        pais2 VARCHAR(255) NOT NULL,
        golesPais1 INT DEFAULT NULL,
        golesPais2 INT DEFAULT NULL,
        fecha DATETIME NOT NULL,
        etapa VARCHAR(100)  NOT NULL,
        FOREIGN KEY (pais1) REFERENCES paises(nombre),
        FOREIGN KEY (pais2) REFERENCES paises(nombre),
        FOREIGN KEY (etapa) REFERENCES fixtures(etapa)

    )
`;

db.query(createPartidoTable, (err, results) => {
    if (err) {
        console.error('Error creating Match table:', err);
    } else {
        console.log('Match table created successfully');
    }
});

module.exports = db;