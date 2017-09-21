const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', Users);