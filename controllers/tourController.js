const Tour = require('./../Model/tourModel');
const getAllTours = async function (req, res) {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'succes',
      result: tours.length,
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
const addTour = async (req, res) => {
  try {
    const data = req.body;
    const tour = await Tour.create(data);
    res.status(201).json({
      status: 'Success',
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
const getTourbyId = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      result: tour.length,
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
const updateTour = async (req, res) => {
  try {
    //Basic Filter
    // First method
    const filter = await Tour.find({
      duration: 5,
      difficulty: easy,
      price: 1497,
    });

    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: 'success',
      result: tour.length,
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    res.status(204);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

module.exports = {
  getAllTours,
  getTourbyId,
  updateTour,
  deleteTour,
  addTour,
};
