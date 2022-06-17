const Tour = require('./../Model/tourModel');
const getAllTours = async function (req, res) {
  try {
    //basic filter
    // 1-method
    // const tours = await Tour.find({ duration: 10 });
    //2-method
    // const tours = await Tour.find().where('duration').lte(10);
    const queryObj = { ...req.query };

    const deleteQueries = ['field', 'sort', 'page', 'limit'];
    deleteQueries.forEach((val) => {
      delete queryObj[val];
    });

    //Advanced Filter

    let queryClient = JSON.stringify(queryObj);
    queryClient = queryClient.replace(/\bgt|gte|lt|lte\b/g, (val) => `$${val}`);
    let queryData = JSON.parse(queryClient);
    let allQuery = Tour.find(queryData);

    //Sort

    if (req.query.sort) {
      const sortData = req.query.sort.split(',').join(' ');

      allQuery = allQuery.sort(sortData);
    } else {
      allQuery = allQuery.sort('-createdAt');
    }

    //Field

    if (req.query.field) {
      let fieldData = req.query.field.split(',').join(' ');
      allQuery = allQuery.select(fieldData);
    } else {
      allQuery = allQuery.select('-__v');
    }

//  Pagination



    const tours = await allQuery;
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
