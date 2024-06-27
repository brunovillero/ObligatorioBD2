const db = require("../mysqlConnection");
const express = require('express');
const router = express.Router();

// Crear una nueva predicción
const createPrediccion = (req, res) => {
    const { idPersona, golesPais1, golesPais2, idPartido } = req.body;

    const query = `
        INSERT INTO predicciones (idPersona, golesPais1, golesPais2, idPartido)
        VALUES (?, ?, ?, ?)
    `;

    db.query(query, [idPersona, golesPais1, golesPais2,idPartido], (err, result) => {
        if (err) {
            console.error('Error creating prediction:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Prediction created successfully' });
    });
};

// Obtener todas las predicciones
const getAllPredicciones = (req, res) => {
    const query = 'SELECT * FROM predicciones';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error getting predictions:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

// Obtener una predicción por ID de jugador
const getPrediccionById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM predicciones WHERE id = ?';

    db.query(query, [id], (err, result) => {
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
const updatePrediccion = (req, res) => {
    const { id } = req.params;
    const { golesPais1, golesPais2 } = req.body;

    const query = `
        UPDATE predicciones
        SET golesPais1 = ?, golesPais2 = ?
        WHERE id = ?
    `;

    db.query(query, [golesPais1, golesPais2, id], (err, result) => {
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
const deletePrediccion = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM predicciones WHERE id = ?';

    db.query(query, [id], (err, result) => {
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
router.post('/predictions', createPrediccion); 

// Obtener todas las predicciones
router.get('/predictions', getAllPredicciones);

// Obtener una predicción por ID de jugador
router.get('/predictions/:id', getPrediccionById);

// Actualizar una predicción
router.put('/predictions/:id', updatePrediccion);

// Eliminar una predicción
router.delete('/predictions/:id', deletePrediccion);

module.exports = router;