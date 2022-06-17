const mongoose = require('mongoose');
const Tour = require('./../../Model/tourModel');
const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: './../../config.env' });
const DB = process.env.DATABASE.replace(
  '<username>',
  process.env.LOGIN
).replace('<password>', process.env.PASSWORD);

mongoose
  .connect(DB, {})
  .then(() => {
    console.log('Db is connected');
  })
  .catch((err) => {
    console.log(err.message);
  });

const data = JSON.parse(fs.readFileSync('./tours-simple.json', 'utf-8'));

const addData = async () => {
  try {
    const add = await Tour.create(data);
    console.log('norm saved');
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    const deleted = await Tour.deleteMany();
    console.log('toza');
  } catch (err) {
    console.log(err);
  }
};
addData();
// deleteData();
