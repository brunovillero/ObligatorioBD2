const db = require("../mysqlConnection");
const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/country_controller');

// Crear un nuevo país
const createCountry = (req, res) => {
    const { Name } = req.body;

    const query = `
        INSERT INTO Countries (Name)
        VALUES (?)
    `;

    db.query(query, [Name], (err, result) => {
        if (err) {
            console.error('Error creating country:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Country created successfully' });
    });
};

// Obtener todos los países
const getAllCountries = (req, res) => {
    const query = 'SELECT * FROM Countries;';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error getting countries:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

// Obtener un país por nombre
const getCountryByName = (req, res) => {
    const { Name } = req.params;
    const query = 'SELECT * FROM Countries WHERE Name = ?';

    db.query(query, [Name], (err, result) => {
        if (err) {
            console.error('Error getting country:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Country not found' });
        }
        res.status(200).json(result[0]);
    });
};

// Actualizar un país
const updateCountry = (req, res) => {
    const { Name } = req.params;
    const { newName } = req.body;

    const query = `
        UPDATE Countries
        SET Name = ?
        WHERE Name = ?
    `;

    db.query(query, [newName, Name], (err, result) => {
        if (err) {
            console.error('Error updating country:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Country not found' });
        }
        res.status(200).json({ message: 'Country updated successfully' });
    });
};

// Eliminar un país
const deleteCountry = (req, res) => {
    const { Name } = req.params;
    const query = 'DELETE FROM Countries WHERE Name = ?';

    db.query(query, [Name], (err, result) => {
        if (err) {
            console.error('Error deleting country:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Country not found' });
        }
        res.status(200).json({ message: 'Country deleted successfully' });
    });
};




// Crear un nuevo país
router.post('/countries', createCountry);

// Obtener todos los países
router.get('/countries', getAllCountries);

// Obtener un país por nombre
router.get('/countries/:Name', getCountryByName);

// Actualizar un país
router.put('/countries/:Name', updateCountry);

// Eliminar un país
router.delete('/countries/:Name', deleteCountry);

module.exports = router;