const db = require("../mysqlConnection");

// Create the prediction table if it doesn't exist
const createPrediction = `
    CREATE TABLE IF NOT EXISTS Predictions (
    ID INT NOT NULL,
    CountryScore1 INT NOT NULL,
    CountryScore2 INT NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (ID) REFERENCES Players(ID)
    )
`;

db.query(createPrediction, (err, results) => {
    if (err) {
        console.error('Error creating predictions table:', err);
    } else {
        console.log('player table created successfully');
    }
});

module.exports = db;