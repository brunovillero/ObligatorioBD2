const db = require("../mysqlConnection");
const express = require('express');
const router = express.Router();

// Create a new match
const createPartido = (req, res) => {
    const { estadio, pais1, pais2, fecha } = req.body;

    const query = `
        INSERT INTO partidos (estadio, pais1, pais2, fecha)
        VALUES (?, ?, ?, ?)
    `;

    db.query(query, [estadio, pais1, pais2, fecha], (err, result) => {
        if (err) {
            console.error('Error creating match:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Match created successfully' });
    });
};

// Get all matches
const getAllPartidos = (req, res) => {
    const query = 'SELECT * FROM partidos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error getting matches:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

// Get a match by ID
const getPartidoById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM partidos WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error getting match:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(result);
    });
};

// Update a match
const updatePartido = (req, res) => {
    const { id } = req.params;
    const { estadio, pais1, pais2, puntosPais1, puntosPais2, fecha } = req.body;

    const query = `
        UPDATE partidos
        SET estadio = ?, pais1 = ?, pais2 = ?, puntosPais1 = ?, puntosPais2 = ?, fecha = ?
        WHERE id = ?
    `;

    db.query(query, [estadio, pais1, pais2, puntosPais1, puntosPais2, fecha, id], (err, result) => {
        if (err) {
            console.error('Error updating match:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Match updated successfully' });
    });
};

// Delete a match
const deletePartido = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM partidos WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting match:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Match deleted successfully' });
    });
};



router.post('/matches', createPartido); //FUNCIONA
router.get('/matches', getAllPartidos); //FUNCIONA
router.get('/matches/:id', getPartidoById);//FUNCIONA
router.put('/matches/:id', updatePartido);//FUNCIONA
router.delete('/matches/:id', deletePartido);//FUNCIONA

module.exports = router;