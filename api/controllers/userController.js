const mongoose = require('mongoose');

const User = mongoose.model('User');

const STATUS_USER_ERROR = 422;

// create the controller methods
const createAccount = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'missing username or password'});
    return;
  }
  const user = new User({ username, password });
  user.save((err) => {
    if (err) throw err;
    res.json(user);
  });
};

const returnUser = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Please Provide a username & password' });
    return;
  }
  // need to fix: user enters wrong password: returns null. set the appropriate error
  User.findOne({ username, password }, (err, user) => {
    if (err) throw err;
    res.json(user);
  });
};

module.exports = {
  createAccount,
  returnUser
};