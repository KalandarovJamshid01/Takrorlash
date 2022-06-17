const express = require('express');
const userController = require('./../controllers/usercontroller');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.addUsers);

userRouter
  .route('/:id')
  .get(userController.getUSersById)
  .patch(userController.updateUsers)
  .delete(userController.deleteUsers);

module.exports = userRouter;
