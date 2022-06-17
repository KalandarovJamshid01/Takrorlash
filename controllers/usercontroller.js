const User = require('./../Model/userModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'succes',
      result: users.length,
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const addUsers = async (req, res) => {
  try {
    const data = req.body;
    const user = await User.create(data);
    res.status(201).json({
      status: 'Success',
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
const getUSersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
const updateUsers = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: 'Success',
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
const deleteUsers = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.status(204);
};

module.exports = {
  deleteUsers,
  updateUsers,
  getAllUsers,
  getUSersById,
  addUsers,
};
