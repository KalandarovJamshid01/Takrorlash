const express = require('express');
const app = express();



const morgan = require('morgan');
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));


app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', addTour);

// app.get('/api/v1/tours/:id', getTourbyId);

// app.patch('/api/v1/tours/:id', updateTour);

// app.delete('/api/v1/tours/:id', deleteTour);

module.exports = app;
