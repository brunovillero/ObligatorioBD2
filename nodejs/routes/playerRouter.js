const db = require('../config/database');

// Create a new player
exports.createJugador = (req, res) => {
    const { Nombre, Usuario, Contraseña, Correo, CI, Carrera, Campeon, Subcampeon } = req.body;
    const Puntaje = 0; // Default value for Puntaje

    const query = `
        INSERT INTO Jugador (Nombre, Usuario, Contraseña, Correo, CI, Puntaje, Carrera, Campeon, Subcampeon)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [Nombre, Usuario, Contraseña, Correo, CI, Puntaje, Carrera, Campeon, Subcampeon], (err, result) => {
        if (err) {
            console.error('Error creating jugador:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Jugador created successfully' });
    });
};

// Get all players
exports.getAllJugadores = (req, res) => {
    const query = 'SELECT * FROM Jugador';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error getting jugadores:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

// Get a player by CI
exports.getJugadorById = (req, res) => {
    const { CI } = req.params;
    const query = 'SELECT * FROM Jugador WHERE CI = ?';

    db.query(query, [CI], (err, result) => {
        if (err) {
            console.error('Error getting jugador:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(result);
    });
};

// Update a player
exports.updateJugador = (req, res) => {
    const { CI } = req.params;
    const { Nombre, Usuario, Contraseña, Correo, Puntaje, Carrera, Campeon, Subcampeon } = req.body;

    const query = `
        UPDATE Jugador
        SET Nombre = ?, Usuario = ?, Contraseña = ?, Correo = ?, Puntaje = ?, Carrera = ?, Campeon = ?, Subcampeon = ?
        WHERE CI = ?
    `;

    db.query(query, [Nombre, Usuario, Contraseña, Correo, Puntaje, Carrera, Campeon, Subcampeon, CI], (err, result) => {
        if (err) {
            console.error('Error updating jugador:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Jugador updated successfully' });
    });
};

// Delete a player
exports.deleteJugador = (req, res) => {
    const { CI } = req.params;
    const query = 'DELETE FROM Jugador WHERE CI = ?';

    db.query(query, [CI], (err, result) => {
        if (err) {
            console.error('Error deleting jugador:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Jugador deleted successfully' });
    });
};