const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Todo = require('./api/models/models')

const server = express();
server.use(bodyParser.json());

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost/todos',
  { useMongoClient: true }
);

connect.then(() => {
  const routes = require('./api/routes/routes');
  routes(server);
  const port = 3000;
  server.listen(port);
  console.log(`server listening on port ${port}`);
}, (err) => {
  console.log('\n*******************');
  console.log('ERROR: Failed to connect to MongoDB.');
  console.log('\n*******************');
});
