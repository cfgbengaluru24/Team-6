const asyncHandler = require("express-async-handler");
const Endline = require("../models/endlineModel");

const getAllEndlineData = asyncHandler(async (req, res) => {
  const endlineData = await Endline.find();
  res.status(200).json(endlineData);
});

const getSingleEndlineData = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const singleEndlineData = await Endline.findById(id);

  if (!singleEndlineData) {
    res.status(404).json("Person not found");
  }

  res.status(200).json(singleEndlineData);
});

const addEndLineData = asyncHandler(async (req, res) => {
  const {
    businessName,
    startDate,
    endDate,
    loan,
    profit,
    institution,
    location,
    amoutSaved,
    workingTime,
    feedback,
  } = req.body;

  try {
    const newEndlineData = await Endline.create({
      businessName,
      startDate,
      endDate,
      loan,
      profit,
      institution,
      location,
      amoutSaved,
      workingTime,
      feedback,
    });

    res.status(201).json(newEndlineData);
  } catch (error) {
    res.status(400).json("Failed to add endline data");
  }
});

module.exports = { getAllEndlineData, getSingleEndlineData, addEndLineData };