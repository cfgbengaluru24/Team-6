const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes.js");
const videoRoutes = require("./routes/videoRoutes.js");
const womenRoutes = require("./routes/womenRoutes.js");
const endlineRoutes = require("./routes/endlineRoutes.js");
const BDPRoutes = require("./routes/BDPRoutes.js");

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
    credentials:true,
    origin: "*"
  }));
// 1) MIDDLEWARES

// 2) ROUTES
app.use("/api/users", userRoutes);
app.use("/api/uploadvideo", videoRoutes);
app.use("/api/women", womenRoutes);
app.use('/api/assessments', assessmentRoutes);


app.use("/api/endline", endlineRoutes);
app.use("/api/BDP", BDPRoutes)

module.exports = app;
