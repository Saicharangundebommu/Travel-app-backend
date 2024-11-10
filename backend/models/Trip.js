const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  budget: { type: Number, default: 0 } // Set a default value or make it optional
});

module.exports = mongoose.model('Trip', tripSchema);
