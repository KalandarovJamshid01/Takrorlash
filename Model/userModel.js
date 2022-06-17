const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  role: { type: String, required: true },
  active: Boolean,
  photo: String,
  password: String,
});

const User = mongoose.model('testUser', tourSchema);
module.exports = User;
