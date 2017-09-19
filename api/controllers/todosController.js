const mongoose = require('mongoose');

const Todo = mongoose.model('Todo');

const STATUS_USER_ERROR = 422;

// code for reusability : Error Check
const sendUserError = (err, res) => {
  res.status(STATUS_USER_ERROR);
  if (typeof err === 'string') {
    res.json({ error: err });
  } else {
    res.json(err);
  }
}

// Create the controller methods
const createTodo = (req, res) => {
  const { text, completed } = req.body;
  if (!text || !completed) {
    sendUserError('missing text or completed field', res);
    return;
  }
  // otherwise no error, created a new todo
  const todo = new Todo({ text, completed });
  // we pass to the .save to save to our database
  todo.save((err) => {
    if (err) throw err;
    res.json(todo);
  });
};

// get/ gets the todos from post
const listTodo = (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) throw err;
    res.json(todos);
  });
};

const singleTodo = (req, res) => {
 const { id } = req.params;
 Todo.findById(id, (err, todo) => {
  if (err) throw err;
  res.json(todo);
 });
};

module.exports = {
  createTodo,
  listTodo,
  singleTodo
};