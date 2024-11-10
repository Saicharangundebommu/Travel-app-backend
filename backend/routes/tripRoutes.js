const express = require('express');
const Trip = require('../models/Trip.js');
const router = express.Router();


router.post('/trips', async (req, res) => {
  try {
    console.log('Received trip data:', req.body);  // Log received data

    // Validate required fields
    const requiredFields = ['from', 'to', 'departureDate', 'returnDate'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    const trip = new Trip(req.body);
    console.log('Created Trip object:', trip);  // Log the created Trip object

    const savedTrip = await trip.save();
    console.log('Saved Trip:', savedTrip);  // Log the saved Trip

    res.json(savedTrip);
  } catch (error) {
    console.error('Error saving trip:', error);  // Log the full error object
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
});


// GET route to retrieve all trips
router.get('/trips', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
