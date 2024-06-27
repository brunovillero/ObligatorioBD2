const db = require("../mysqlConnection");
const express = require('express');
const router = express.Router();

// Crear un nuevo país
async function createPais(req, res){
    
    const nombre = req.body.nombre

    const query = `
        INSERT INTO paises (nombre)
        VALUES (?);
    `;
    console.log("pais creado correctamente. el valor de pais es:" + nombre)

    db.query(query, [nombre], (err, result) => {
        if (err) {
            console.error('Error creating pais:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'pais created successfully' });
    });
};

// Obtener todos los países
const getAllPaises = (req, res) => {
    const query = 'SELECT * FROM paises;';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error getting countries:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

// Obtener un país por nombre
const getPaisByName = (req, res) => {
    const { nombre } = req.params;
    const query = 'SELECT * FROM paises WHERE nombre = ?;';

    db.query(query, [nombre], (err, result) => {
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

// Actualizar un país. Se pone en la ruta el nombre del pais a cambiar y se escribe el nuevo nombre en el json
const updatePais = (req, res) => {
    
    const { nuevoNombre } = req.body;
    const { nombre } = req.params;

    const query = `
        UPDATE paises
        SET nombre = ?
        WHERE nombre = ?
    `;

    db.query(query, [nuevoNombre, nombre], (err, result) => {
        if (err) {
            console.error('Error updating country:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Country not found' });
        }
        console.log("salio bien")
        res.status(200).json({ message: 'Country updated successfully' });
    });
};

// Eliminar un país
const deletePais = (req, res) => {
    const { nombre } = req.params;
    const query = 'DELETE FROM paises WHERE nombre = ?';

    db.query(query, [nombre], (err, result) => {
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
router.post('/countries', createPais); 

// Obtener todos los países
router.get('/countries', getAllPaises);

// Obtener un país por nombre
router.get('/countries/:nombre', getPaisByName);

// Eliminar un país
router.delete('/countries/:nombre', deletePais);

module.exports = router;