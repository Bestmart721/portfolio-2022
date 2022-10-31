const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const validateComment = require('../middlewares/validateComment');
const disallowProd = require('../middlewares/disallowProd');
const Comment = mongoose.model('comments');

module.exports = (app) => {
  app.get(
    '/api/comments',
    async (req, res) => {
      const comments = await Comment.find();
      res.send(comments);
    }
  );

  app.get(
    '/api/resetuser',
    disallowProd,
    requireLogin,
    async (req, res) => {
      req.user.posted = false;
      const user = await req.user.save(); // Replace potentially stale User
      res.status(200).send(user);
    }
  )

  app.post(
    '/api/comments/new',
    requireLogin,
    validateComment,
    async (req, res) => {
      const comment = new Comment({
        title: req.body.title,
        content: req.body.content,
        created: Date.now(),
        updated: Date.now(),
        _user: req.user.id
      });
      try {
        await comment.save();
        req.user.posted = true;
        const user = await req.user.save(); // Replace potentially stale User
        res.redirect('/api/comments');
      } catch (err) {
        res.status(501).send(err);
      }
    }
  );
};
