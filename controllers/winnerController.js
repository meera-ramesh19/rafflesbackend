// In your route file for winners, e.g., winners.js
const express = require('express');
const winners = express.Router({ mergeParams: true });
const db = require('../db/dbConfig.js');

// Import the query function
const { getAllWinners } = require('../queries/winner.js');

// Route to get all winners
winners.get('/', async (req, res) => {
  try {
    const allWinners = await getAllWinners();
  
    if (allWinners.length > 0) {
      res.status(200).json({
        payload: allWinners,
        success: true
      });
    } else {
      // If no winners found, throw an error
      throw new Error('No Winners found.');
    }
  } catch (error) {
    // Handle any errors, including no winners found
    res.status(404).json({ payload: error.message || 'No Winners yet.', success: false });
  }
});

module.exports = winners;
