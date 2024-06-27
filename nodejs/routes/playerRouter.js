const db = require("../mysqlConnection");
const express = require('express');
const router = express.Router();

// Create a new player
const createJugador = (req, res) => {
    const { id, nombre, usuario, contrasena, mail, carrera, campeon, subcampeon } = req.body;
    const puntaje = 0; // Default value for Puntaje

    const query = `
        INSERT INTO jugadores (id, nombre, usuario, contrasena, mail, puntaje, carrera, campeon, subcampeon)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [id, nombre, usuario, contrasena, mail, puntaje, carrera, campeon, subcampeon], (err, result) => {
        if (err) {
            console.error('Error creating player:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Player created successfully' });
    });
};

// Get all players
const getAllJugadores = (req, res) => {
    const query = 'SELECT * FROM jugadores';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error getting players:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

// Get a player by CI
const getJugadorById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM jugadores WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error getting player:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(result);
    });
};

// Update a player
const updateJugador = (req, res) => {
    const { id } = req.params;
    const { nombre, usuario, contrasena, mail, puntaje, carrera, campeon, subcampeon } = req.body;

    const query = `
        UPDATE jugadores
        SET nombre = ?, usuario = ?, contrasena = ?, mail = ?, puntaje = ?, carrera = ?, campeon = ?, subcampeon = ?
        WHERE id = ?
    `;

    db.query(query, [nombre, usuario, contrasena, mail, puntaje, carrera, campeon, subcampeon, id], (err, result) => {
        if (err) {
            console.error('Error updating jugadores:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Player updated successfully' });
    });
};

// Delete a player
const deletePlayer = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM jugadores WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting player:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Player deleted successfully' });
    });
};


// Crear un nuevo jugador
router.post('/players', createJugador);

// Obtener todos los jugadores
router.get('/players', getAllJugadores); 

// Obtener un jugador por ID
router.get('/players/:id', getJugadorById);
// Actualizar un jugador
router.put('/players/:id', updateJugador);

// Eliminar un jugador
router.delete('/players/:id', deletePlayer);

module.exports = router;