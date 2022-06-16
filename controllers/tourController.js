const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

const checkID = (req, res, next, val) => {
  if (val > tours.length) {
    res.status(404).json({
      status: 'failed',
    });
  }
};

const getAllTours = function (req, res) {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: tours,
  });
};
const addTour = (req, res) => {
  const data = req.body;
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, data);
  tours.push(newTour);
  fs.writeFile(
    './dev-data/data/tours-simple.json',
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        result: tours.length,
        data: newTour,
      });
    }
  );
};
const getTourbyId = (req, res) => {
  const param = req.params.id * 1;
  const data = tours.find((val) => val.id === param);
  if (data) {
    res.status(200).json({
      staus: 'success',
      data: data,
    });
  } else {
    console.log(err);
  }
};
const updateTour = (req, res) => {
  const param = req.params.id * 1;
  if (param > tours.length) {
    return res.status(404).json({
      status: 'failed',
    });
  }

  const data = tours.find((val) => val.id === param);
  if (data) {
    res.status(200).json({
      staus: 'success',
      data: data,
    });
  }
};
const deleteTour = (req, res) => {
  const param = req.params.id * 1;
  if (param > tours.length) {
    return res.status(404).json({
      status: 'failed',
    });
  }

  const data = tours.find((val) => val.id === param);
  if (data) {
    res.status(200).json({
      staus: 'success',
      data: data,
    });
  }
};

module.exports = {
  getAllTours,
  getTourbyId,
  updateTour,
  deleteTour,
  addTour,
  checkID,
};
