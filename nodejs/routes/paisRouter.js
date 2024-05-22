const express = require("express");
const { createPais, getPaises } = require("../controllers/pais_controller")

const router = express.Router();

router.getAll();

router.post('/paises', createPais)
router.get('/paises', getPaises)
router.get('/paises/:nombre', getPaisByName)

module.exports = router;