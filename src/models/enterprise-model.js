const mongoose = require('mongoose');

const enterpriseSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    type: {
        type: Number,
        required: true
    },
    name: {
      type: String,
      required: true
    }
})

module.exports = mongoose.model('Enterprise', enterpriseSchema, 'enterprise')