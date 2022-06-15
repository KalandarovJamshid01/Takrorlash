const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
const tours = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: tours,
  });
});
app.post('/api/v1/tours', (req, res) => {
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
});

app.get('/api/v1/students/:id', (req, res) => {
  const param = req.params.id;
});

app.listen(8000, () => {
  console.log('server is working');
});
