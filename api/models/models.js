const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
  text: {
    type: String
  },
  completed: {
    type: String
  },
  create_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Todo', Todo);