const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../mysqlConnection");

const router = express.Router();

const generateAuthToken = (user) => {
  return jwt.sign({ id: user.id, email: user.mail }, 'your_jwt_secret', { expiresIn: '1h' });
};

// Registro
router.post('/register', (req, res) => {
  const { nombre, mail, contrasena, id, usuario, carrera, campeon, subcampeon } = req.body;

  const saltRounds = 10;
  bcrypt.hash(contrasena, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    const query = `INSERT INTO jugadores (id, nombre, usuario, contrasena, mail, puntaje, carrera, campeon, subcampeon)
                   VALUES (?, ?, ?, ?, ?, 0, ?, ?, ?)`;

    db.query(query, [id, nombre, usuario, hash, mail, carrera, campeon, subcampeon], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      const token = generateAuthToken(result);

      res.status(201).json({ message: 'User registered successfully', token });
    });
  });
});

// Login
router.post('/login', (req, res) => {
  const { mail, contrasena } = req.body;
  
  const query = `SELECT * FROM jugadores WHERE mail = ?`;

  db.query(query, [mail], async (err, result) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (result.length === 0) {
      return res.status(400).json({ message: 'Invalid mail or contraseña' });
    }

    const user = result[0];

    const validPassword = await bcrypt.compare(contrasena, user.contrasena);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid mail or contraseña' });
    }

    const token = generateAuthToken(user);

    res.status(200).json({ token });
  });
});

module.exports = router;
