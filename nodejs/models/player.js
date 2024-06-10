const db = require("../mysqlConnection");

// Create the Jugador table if it doesn't exist
const createPlayerTable = `
    CREATE TABLE IF NOT EXISTS Players (
        Name VARCHAR(255) NOT NULL,
        Username VARCHAR(255) NOT NULL,
        Password VARCHAR(255) NOT NULL,
        Email VARCHAR(100) NOT NULL CHECK (Email LIKE '%_@__%.__%'),
        ID VARCHAR(20) NOT NULL PRIMARY KEY,
        Points INT DEFAULT 0,
        Major VARCHAR(255) NOT NULL,
        Champion VARCHAR(20),
        SubChampion VARCHAR(20),
        FOREIGN KEY (Champion) REFERENCES Country(Name),
        FOREIGN KEY (SubChampion) REFERENCES Country(Name)
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