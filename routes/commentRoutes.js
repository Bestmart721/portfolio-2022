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
      console.log(req.body);
      const {title, content} = req.body;
      console.log(title);
      console.log(content);
      const comment = new Comment({
        title,
        content,
        created: Date.now(),
        updated: Date.now(),
        _user: req.user.id
      });
      try {
        await comment.save();
        res.status(200).redirect('/api/comments');
      } catch (err) {
        res.status(501).send(err);
      }
    }
  );
};
