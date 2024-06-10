const db = require("../mysqlConnection");
const express = require('express');
const router = express.Router();

// Crear una nueva predicción
const createPrediction = (req, res) => {
    const { ID, goles1, goles2 } = req.body;

    const query = `
        INSERT INTO Predictions (ID, goles1, goles2)
        VALUES (?, ?, ?)
    `;

    db.query(query, [ID, goles1, goles2], (err, result) => {
        if (err) {
            console.error('Error creating prediction:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Prediction created successfully' });
    });
};

// Obtener todas las predicciones
const getAllPredictions = (req, res) => {
    const query = 'SELECT * FROM Predictions';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error getting predictions:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

// Obtener una predicción por ID de jugador
const getPredictionById = (req, res) => {
    const { ID } = req.params;
    const query = 'SELECT * FROM Predictions WHERE ID = ?';

    db.query(query, [ID], (err, result) => {
        if (err) {
            console.error('Error getting prediction:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Prediction not found' });
        }
        res.status(200).json(result[0]);
    });
};

// Actualizar una predicción
const updatePrediction = (req, res) => {
    const { ID } = req.params;
    const { goles1, goles2 } = req.body;

    const query = `
        UPDATE Predictions
        SET goles1 = ?, goles2 = ?
        WHERE ID = ?
    `;

    db.query(query, [goles1, goles2, ID], (err, result) => {
        if (err) {
            console.error('Error updating prediction:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Prediction not found' });
        }
        res.status(200).json({ message: 'Prediction updated successfully' });
    });
};

// Eliminar una predicción
const deletePrediction = (req, res) => {
    const { ID } = req.params;
    const query = 'DELETE FROM Predictions WHERE ID = ?';

    db.query(query, [ID], (err, result) => {
        if (err) {
            console.error('Error deleting prediction:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Prediction not found' });
        }
        res.status(200).json({ message: 'Prediction deleted successfully' });
    });
};





// Crear una nueva predicción
router.post('/predictions', createPrediction);

// Obtener todas las predicciones
router.get('/predictions', getAllPredictions);

// Obtener una predicción por ID de jugador
router.get('/predictions/:ID', getPredictionById);

// Actualizar una predicción
router.put('/predictions/:ID', updatePrediction);

// Eliminar una predicción
router.delete('/predictions/:ID', deletePrediction);

module.exports = router;