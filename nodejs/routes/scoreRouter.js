const express = require('express');
const router = express.Router();
const { calculateScore } = require('../services/scoreService');

router.get('/score/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const score = await calculateScore(id);
    res.status(200).json({ score });
  } catch (error) {
    console.error('Error calculating score:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
