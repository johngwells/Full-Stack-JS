module.exports = (app) => {
  const controllerMethods = require('../controllers/todosController');

  app.route('/todos')
    .post(controllerMethods.createTodo)
    .get(controllerMethods.listTodo);

  app.route('/todos/:id')
    .get(controllerMethods.singleTodo);
};
