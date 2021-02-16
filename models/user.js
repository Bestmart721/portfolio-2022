const mongoose = require('mongoose');
const { Schema } = mongoose;

// Can be added to w/out big db restructuring
const userSchema = new Schema({
  googleID : String
});

mongoose.model('users', userSchema);
