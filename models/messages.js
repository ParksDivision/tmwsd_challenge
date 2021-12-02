let mongoose = require('mongoose');

// Messages Schema
let messageSchema = mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  }
});

let Message = module.exports = mongoose.model('Message', messageSchema);