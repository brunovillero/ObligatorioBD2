const db = require("../mysqlConnection");
const express = require('express');
const router = express.Router();

// Create a new player
const createPlayer = (req, res) => {
    const { Name, Username, Password, Email, ID, Major, Champion, SubChampion } = req.body;
    const Points = 0; // Default value for Puntaje

    const query = `
        INSERT INTO Players (Name, Username, Password, Email, ID, Points, Major, Champion, SubChampion)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [Name, Username, Password, Email, ID, Points, Major, Champion, SubChampion], (err, result) => {
        if (err) {
            console.error('Error creating player:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Player created successfully' });
    });
};

// Get all players
const getAllPlayers = (req, res) => {
    const query = 'SELECT * FROM Players';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error getting players:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

// Get a player by CI
const getPlayerById = (req, res) => {
    const { CI } = req.params;
    const query = 'SELECT * FROM Players WHERE CI = ?';

    db.query(query, [CI], (err, result) => {
        if (err) {
            console.error('Error getting player:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(result);
    });
};

// Update a player
const updatePlayer = (req, res) => {
    const { CI } = req.params;
    const { Name, Username, Password, Email, Points, Major, Champion, SubChampion } = req.body;

    const query = `
        UPDATE Players
        SET Name = ?, Username = ?, Password = ?, Email = ?, Points = ?, Major = ?, Champion = ?, SubChampion = ?
        WHERE ID = ?
    `;

    db.query(query, [Name, Username, Password, Email, Points, Major, Champion, SubChampion, ID], (err, result) => {
        if (err) {
            console.error('Error updating player:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Player updated successfully' });
    });
};

// Delete a player
const deletePlayer = (req, res) => {
    const { ID } = req.params;
    const query = 'DELETE FROM Players WHERE ID = ?';

    db.query(query, [CI], (err, result) => {
        if (err) {
            console.error('Error deleting player:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Player deleted successfully' });
    });
};


// Crear un nuevo jugador
router.post('/players', createPlayer);

// Obtener todos los jugadores
router.get('/players', getAllPlayers);

// Obtener un jugador por ID
router.get('/players/:ID', getPlayerById);

// Actualizar un jugador
router.put('/players/:ID', updatePlayer);

// Eliminar un jugador
router.delete('/players/:ID', deletePlayer);

module.exports = router;