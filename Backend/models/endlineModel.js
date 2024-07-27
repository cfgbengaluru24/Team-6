const mongoose = require("mongoose");

const endlineModel = mongoose.Schema({
  businessName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  loan: { type: Number, required: true },
  profit: { type: Number, required: true },
  institution: { type: String, required: true },
  location: { type: String },
  amoutSaved: { type: Number },
  workingTime: { type: Number },
  feedback: { type: String },
});

const Endline = mongoose.model("Endline", endlineModel);

module.exports = Endline;
