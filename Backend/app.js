const express = require("express");
const userRoutes = require("./routes/userRoutes.js");
const app = express();

app.use(express.json());
// 1) MIDDLEWARES

// 2) ROUTES
app.use("/api/users", userRoutes);

module.exports = app;
