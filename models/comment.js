const mongoose = require('mongoose');
const { Schema } = mongoose;

// Can be added to w/out big db restructuring
const commentSchema = new Schema({
  title: String,
  content: String,
  created: Date,
  updated: Date,
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('comments', commentSchema);
