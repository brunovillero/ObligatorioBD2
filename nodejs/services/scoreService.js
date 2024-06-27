const db = require('../mysqlConnection');

const calculateScore = async (playerId) => {
  try {
    const queryPredictions = `
      SELECT p.id AS partidoId, p.pais1, p.pais2, p.puntosPais1, p.puntosPais2, pred.puntosPais1 AS predPais1, pred.puntosPais2 AS predPais2
      FROM partidos p
      JOIN predicciones pred ON p.id = pred.idPartido
      WHERE pred.idPersona = ?
    `;

    const [results] = await db.promise().query(queryPredictions, [playerId]);
    
    let score = 0;
    
    results.forEach(result => {
      if (result.puntosPais1 !== null && result.puntosPais2 !== null) {
        if (result.puntosPais1 === result.predPais1 && result.puntosPais2 === result.predPais2) {
          score += 3;
        } else if ((result.puntosPais1 > result.puntosPais2 && result.predPais1 > result.predPais2) || 
                   (result.puntosPais1 < result.puntosPais2 && result.predPais1 < result.predPais2) || 
                   (result.puntosPais1 === result.puntosPais2 && result.predPais1 === result.predPais2)) {
          score += 1;
        }
      }
    });

    const updateScoreQuery = `UPDATE jugadores SET puntaje = ? WHERE id = ?`;
    await db.promise().query(updateScoreQuery, [score, playerId]);

    return score;
  } catch (error) {
    console.error('Error calculating score:', error);
    throw error;
  }
};

module.exports = {
  calculateScore,
};
