const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  name: String,
  price: Number,
  login: String,
});

const Tour = mongoose.model('testTour', tourSchema);
module.exports = Tour;
