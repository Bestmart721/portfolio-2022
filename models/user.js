const mongoose = require('mongoose');
const { Schema } = mongoose;

// Can be added to w/out big db restructuring
const userSchema = new Schema({
  googleID : String,
  posted : { type: Boolean, default: false }
});

mongoose.model('users', userSchema);
