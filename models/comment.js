const mongoose = require('mongoose');
const { Schema } = mongoose;

// Can be added to w/out big db restructuring
const commentSchema = new Schema({
  title: String,
  body: String,
  dateSent: Date,
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('comments', commentSchema);
