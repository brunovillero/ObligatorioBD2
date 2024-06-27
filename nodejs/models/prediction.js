const db = require("../mysqlConnection");

// Create the prediction table if it doesn't exist
const createPrediccion = `
    CREATE TABLE IF NOT EXISTS predicciones (
    id INT AUTO_INCREMENT,
    idPersona VARCHAR(8) NOT NULL,
    golesPais1 INT NOT NULL,
    golesPais2 INT NOT NULL,
    idPartido INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idPersona) REFERENCES jugadores(id),
    FOREIGN KEY (idPartido) REFERENCES partidos(id)
    )
`;

db.query(createPrediccion, (err, results) => {
    if (err) {
        console.error('Error creating predictions table:', err);
    } else {
        console.log('player table created successfully');
    }
});

module.exports = db;