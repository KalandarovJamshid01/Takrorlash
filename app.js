const express = require('express');
const fs = require('fs');
const app = express();

const data = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

app.get('/home', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: data.length,
    data: data,
  });
});

app.listen(8000, () => {
  console.log('server is working');
});
