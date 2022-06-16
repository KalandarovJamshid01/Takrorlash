const Tour = require('./../Model/tourModel');
const getAllTours = function (req, res) {};
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
const getTourbyId = (req, res) => {};
const updateTour = (req, res) => {};
const deleteTour = (req, res) => {};

module.exports = {
  getAllTours,
  getTourbyId,
  updateTour,
  deleteTour,
  addTour,
};
