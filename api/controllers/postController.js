const mongoose = require('mongoose');

const Post = mongoose.model('BlogPost');

const STATUS_USER_ERROR = 422;

const newPost = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'title or content missing'});
    return;
  }
  const post = new Post({ title, content });
  post.save((err) => {
    if (err) throw err;
    res.json(post);
  });
};

// returns an array of blog posts
const listPosts = (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) throw err;
    res.json(posts);
  });
};

module.exports = {
  newPost,
  listPosts
};