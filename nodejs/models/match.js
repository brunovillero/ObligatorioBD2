const db = require("../mysqlConnection");

// Create the Match table if it doesn't exist
const createMatchTable = `
    CREATE TABLE IF NOT EXISTS Matches (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        Stadium VARCHAR(255),
        Country1 INT NOT NULL,
        Country2 INT NOT NULL,
        Country1Score INT DEFAULT NULL,
        Country2Score INT DEFAULT NULL,
        Date DATETIME NOT NULL,
        FOREIGN KEY (country1) REFERENCES Country(Name),
        FOREIGN KEY (country2) REFERENCES Country(Name)
    )
`;

db.query(createMatchTable, (err, results) => {
    if (err) {
        console.error('Error creating Match table:', err);
    } else {
        console.log('Match table created successfully');
    }
});

module.exports = db;