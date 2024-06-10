const db = require("../mysqlConnection");
const express = require('express');
const router = express.Router();

// Create a new match
const createMatch = (req, res) => {
    const { stadium, country1ID, country2ID, country1Score, country2Score, date } = req.body;

    const query = `
        INSERT INTO Match (Stadium, Country1, Country2, Country1Score, Country2Score, Date)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [stadium, country1ID, country2ID, country1Score, country2Score, date], (err, result) => {
        if (err) {
            console.error('Error creating match:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Match created successfully' });
    });
};

// Get all matches
const getAllMatches = (req, res) => {
    const query = 'SELECT * FROM Match';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error getting matches:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

// Get a match by ID
const getMatchById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Match WHERE ID = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error getting match:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(result);
    });
};

// Update a match
const updateMatch = (req, res) => {
    const { id } = req.params;
    const { stadium, country1, country2, country1Score, country2Score, date } = req.body;

    const query = `
        UPDATE Match
        SET Stadium = ?, Country1 = ?, Country2 = ?, Country1Score = ?, Country2Score = ?, Date = ?
        WHERE id = ?
    `;

    db.query(query, [stadium, country1, country2, country1Score, country2Score, date, id], (err, result) => {
        if (err) {
            console.error('Error updating match:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Match updated successfully' });
    });
};

// Delete a match
const deleteMatch = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Match WHERE ID = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting match:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Match deleted successfully' });
    });
};



router.post('/matches', createMatch);
router.get('/matches', getAllMatches);
router.get('/matches/:id', getMatchById);
router.put('/matches/:id', updateMatch);
router.delete('/matches/:id', deleteMatch);

module.exports = router;