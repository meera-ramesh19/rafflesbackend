//controls the routes the way it goes for
const express = require('express');
const raffles = express.Router();
const db = require('../db/dbConfig.js');

//import validation
const {
    getAllRaffles,
  } = require('../queries/raffle.js')


//import participant controller
const participantsController = require("./participantController.js");
raffles.use("/:raffleId/participant", participantsController);
  
const winnersController = require("./winnerController.js");
raffles.use("/:raffleId/winners", winnersController);

//Index
raffles.get('/', async (req, res) => {
    const allRaffles = await getAllRaffles();
  
    try {
      if (allRaffles.length ) {
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