const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const validateComment = require('../middlewares/validateComment');
const Comment = mongoose.model('comments');

module.exports = (app) => {
  app.get(
    '/api/comments',
    async (req, res) => {
      const comments = await Comment.find();
      res.send(comments);
    }
  );

  app.post(
    '/api/comments/new',
    requireLogin,
    validateComment,
    async (req, res) => {
      const {title, body} = req.body;
      const comment = new Comment({
        title,
        body,
        _user: req.user.id
      });
      comment.save();
      //res.redirect('/api/comments');
    }
  );
};
