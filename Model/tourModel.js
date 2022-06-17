const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is requires'] },
  duration: { type: Number, required: true },
  maxGroupSiza: {
    type: Number,
    require: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  ratingsAverage: {
    type: Number,
    require: true,
  },
  ratingsQuantity: {
    type: Number,
    require: true,
  },
  price: Number,
  summary: { type: String, trim: true },
  description: {
    type: String,
    trim: true,
  },
  imageCover: { type: String, required: true },
  images: [String],
  startDates: [Date],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Tour = mongoose.model('testTour', tourSchema);
module.exports = Tour;
