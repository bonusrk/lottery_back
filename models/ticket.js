const mongoose = require('../libs/mongoose');
const config = require('config');

const ticketSchema = new mongoose.Schema({
  ticketNumber: {
    type: Number,
    required: 'Ticket number is required'
  }
})

module.exports = mongoose.model('Ticket', ticketSchema)