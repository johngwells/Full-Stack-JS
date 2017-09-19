const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const server = express();
server.use(bodyParser.json());

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost/todos',
  { useMongoClient: true }
);

// Routes here - Get/ Post/ etc.

connect.then(() => {
  const port = 3000;
  server.listen(3000);
  console.log(`server listening on port ${port}`);
}, (err) => {
  console.log('\n*******************');
  console.log('ERROR: Failed to connect to MongoDB.');
  console.log('\n*******************');
});
