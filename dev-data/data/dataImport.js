const mongoose = require('mongoose');

const fs = require('fs');

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
