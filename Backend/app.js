const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const assessmentRoutes = require('./routes/assessment');
const app = express();

const PORT = process.env.PORT || 5000;

// mongoose.connect('mongodb://localhost:27017/assessmentDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/api/assessments', assessmentRoutes);


// 1) MIDDLEWARES


// 2) ROUTES

module.exports = app;