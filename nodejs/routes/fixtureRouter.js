const db = require("../mysqlConnection");
const express = require('express');
const router = express.Router();


// Create a new fixture
const createFixture = (req, res) => {
    const { stage } = req.body;

    const query = `
        INSERT INTO Fixture (stage)
        VALUES (?)
    `;

    db.query(query, [stage], (err, result) => {
        if (err) {
            console.error('Error creating fixture:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Fixture created successfully' });
    });
};

// Get all fixtures
const getAllFixtures = (req, res) => {
    const query = 'SELECT * FROM Fixture';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error getting fixtures:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

// Get a fixture by stage
const getFixtureByStage = (req, res) => {
    const { stage } = req.params;
    const query = 'SELECT * FROM Fixture WHERE stage = ?';

    db.query(query, [stage], (err, result) => {
        if (err) {
            console.error('Error getting fixture:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(result);
    });
};

// Update a fixture
const updateFixture = (req, res) => {
    const { stage } = req.params;
    const { newStage } = req.body;

    const query = `
        UPDATE Fixture
        SET stage = ?
        WHERE stage = ?
    `;

    db.query(query, [newStage, stage], (err, result) => {
        if (err) {
            console.error('Error updating fixture:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Fixture updated successfully' });
    });
};

// Delete a fixture
const deleteFixture = (req, res) => {
    const { stage } = req.params;
    const query = 'DELETE FROM Fixture WHERE stage = ?';

    db.query(query, [stage], (err, result) => {
        if (err) {
            console.error('Error deleting fixture:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Fixture deleted successfully' });
    });
};



// Create a new fixture
router.post('/fixtures', createFixture);

// Get all fixtures
router.get('/fixtures', getAllFixtures);

// Get a fixture by stage
router.get('/fixtures/:stage', getFixtureByStage);

// Update a fixture
router.put('/fixtures/:stage', updateFixture);

// Delete a fixture
router.delete('/fixtures/:stage', deleteFixture);

module.exports = router;