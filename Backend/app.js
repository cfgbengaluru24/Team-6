const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const assessmentRoutes = require('./routes/assessment');
const userRoutes = require("./routes/userRoutes.js");
const videoRoutes = require("./routes/videoRoutes.js");
const womenRoutes = require("./routes/womenRoutes.js");
const endlineRoutes = require("./routes/endlineRoutes.js");

const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;


app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
// 1) MIDDLEWARES

// 2) ROUTES
app.use("/api/users", userRoutes);
app.use("/api/uploadvideo", videoRoutes);
app.use("/api/women", womenRoutes);
app.use('/api/assessments', assessmentRoutes);

app.use("/api/endline", endlineRoutes);

module.exports = app;
