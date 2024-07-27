const express = require("express");
const userRoutes = require("./routes/userRoutes.js");
const videoRoutes = require("./routes/videoRoutes.js");
const womenRoutes = require("./routes/womenRoutes.js");
const endlineRoutes = require("./routes/endlineRoutes.js");

const cors = require("cors");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(express.json());
// 1) MIDDLEWARES

// 2) ROUTES
app.use("/api/users", userRoutes);
app.use("/api/uploadvideo", videoRoutes);
app.use("/api/women", womenRoutes);
app.use("/api/endline", endlineRoutes);

module.exports = app;
