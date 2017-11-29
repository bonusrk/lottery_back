const mongoose = require('mongoose');
const config = require('config');

const ticketSchema = new mongoose.Schema({
  ticketNumber: {
    type: Number,
    unique: true,
  }
})
