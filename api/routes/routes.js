module.exports = (app) => {
  const controllerMethods = require('../controllers/todosController');
  const login = require('../controllers/userController');
  const post = require('../controllers/postController');

  app.route('/new-user')
    .post(login.createAccount);

  app.route('/login')
    .post(login.returnUser);

  app.route('/new-post')
  .post(post.newPost);
  
  app.route('/posts')
    .get(post.listPosts);

  app.route('/todos')
    .post(controllerMethods.createTodo)
    .get(controllerMethods.listTodo);

  app.route('/todos/:id')
    .get(controllerMethods.singleTodo);
};
