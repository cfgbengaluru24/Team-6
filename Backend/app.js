const express = require("express");
const userRoutes = require("./routes/userRoutes.js");
const videoRoutes = require("./routes/videoRoutes.js");
const app = express();

app.use(express.json());
// 1) MIDDLEWARES

// 2) ROUTES
app.use("/api/users", userRoutes);
app.use("/api/uploadvideo",videoRoutes);

module.exports = app;
