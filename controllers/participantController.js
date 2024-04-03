//controls the routes the way it goes for
const express = require('express');
const ruffles = express.Router();
const db = require('../db/dbConfig.js');

const participantController = require('./participantController.js');

// //access to being able to things like get or set, update or delete
const participants = express.Router({ mergeParams: true });

raffles.use('/:raffleId/participants', participantController);
//import validation
const {
    getAllParticipants,
  } = require('../queries/raffle.js')


//Index
participants.get('/', async (req, res) => {
    const allParticipants = await getAllParticipants();
  
    try {
      if (allParticipants.length > 0) {
        res.status(200).json({
          payload: allParticipants,
          success: true
        });
      }else{
        throw new Error('No Raffles found.');
      }
    } catch (error) {
      res.status(404).json({ payload: 'No Raffles yet.', success: false });
    }
  });

module.exports = participants;