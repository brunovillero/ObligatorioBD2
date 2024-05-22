const db = require('') // aca tengo que poner la ruta a la bdd

const createPais = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(500).json('algo salio mal al crear el pais')
        }

        const data = await db.query(`INSERT INTO pais (nombre) VALUES (?)`, [nombre])
        if (!data) {
            return res.status(404).json('falta informacion a emitir')
        }
        res.status(200).json(data)
    } catch (error) {
        console.error('error al crear pais: ', error);
        res.status(500).json({
            message: 'Error al crear pais'
        });
    }
}

const getPaises = async (req, res) => {
    try {
        const data = await db.query(`SELECT * FROM paises`)
        if (!data) {
            return res.status(404).json('no se encuentran los paises')
        }
        res.status(200).json(data)
    } catch (error) {
        console.error('error al pedir los paises', error);
        res.status(500).json({
            message: 'Error al conseguir paises'
        });
    }
}

const getPaisByName = async (req, res) => {
    try {
        const nombre = req.params.nombre
        if (!nombre) {
            res.status(404).json('no se encontro el pais')
        }
        const data = await db.query(`SELECT * FROM paises WHERE nombre=?`, [nombre])
        if (!data) {
            return res.status(404).json('error al buscar el pais')
        }
        res.status(200).json(data)
    } catch (error) {
        console.error('error al buscar el pais', error);
        res.status(500).json({
            message: 'Error al buscar el pais'
        });
    }
}

module.exports = { createPais, getPaises, getPaisByName }