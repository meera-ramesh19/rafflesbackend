//controls the routes the way it goes for
const express = require('express');
const raffles = express.Router();
const db = require('../db/dbConfig.js');

//import validation
const {
    getAllRaffles,
  } = require('../queries/raffle.js')


  //import participant controller
// const participantController = require('./participantController.js');

 //access to being able to things like get or set, update or delete
// const participants = express.Router({ mergeParams: true });

// raffles.use('/:raffleId/participants', participantController);

//Index
raffles.get('/', async (req, res) => {
    const allRaffles = await getAllRaffles();
  
    try {
      if (allRaffles.length > 0) {
        res.status(200).json({
          payload: allRaffles,
          success: true
        });
      }else{
        throw new Error('No Raffles found.');
      }
    } catch (error) {
      res.status(404).json({ payload: 'No Raffles yet.', success: false });
    }
  });

  module.exports = raffles;