const db = require("../mysqlConnection");
const express = require('express');
const router = express.Router();


// Create a new fixture
const createFixture = (req, res) => {
    const { etapa } = req.body;

    const query = `
        INSERT INTO fixtures (etapa)
        VALUES (?)
    `;

    db.query(query, [etapa], (err, result) => {
        if (err) {
            console.error('Error creating fixture:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Fixture created successfully' });
    });
};

// Get all fixtures
const getAllFixtures = (req, res) => {
    const query = 'SELECT * FROM fixtures';
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
    const { etapa } = req.params;
    const query = 'SELECT * FROM fixtures WHERE etapa = ?';

    db.query(query, [etapa], (err, result) => {
        if (err) {
            console.error('Error getting fixture:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(result);
    });
};

// Update a fixture
const updateFixture = (req, res) => {
    const { nuevaEtapa } = req.body;
    const { etapa } = req.params;

    const query = `
        UPDATE fixtures
        SET etapa = ?
        WHERE etapa = ?
    `;

    db.query(query, [nuevaEtapa, etapa], (err, result) => {
        if (err) {
            console.error('Error updating fixture:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Fixture updated successfully' });
    });
};

// Delete a fixture
const deleteFixture = (req, res) => {
    const { etapa } = req.params;
    const query = 'DELETE FROM fixtures WHERE etapa = ?';

    db.query(query, [etapa], (err, result) => {
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
router.get('/fixtures/:etapa', getFixtureByStage);

// Update a fixture
router.put('/fixtures/:etapa', updateFixture);

// Delete a fixture
router.delete('/fixtures/:etapa', deleteFixture);

module.exports = router;