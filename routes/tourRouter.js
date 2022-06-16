const express = require('express');
const tourController = require('./../controllers/tourController');

tourRouter.param('id', tourController.checkID);

const tourRouter = express.Router();
tourRouter
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.addTour);
tourRouter
  .route('/:id')
  .get(tourController.getTourbyId)
  .delete(tourController.deleteTour)
  .patch(tourController.updateTour);

module.exports = tourRouter;
