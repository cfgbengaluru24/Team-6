const asyncHandler = require("express-async-handler");
const Women = require("../models/womenModel");
const Business = require("../models/businessModel");

const fetchAllWomen = asyncHandler(async (req, res) => {
  const allWomen = await Women.find();
  res.status(200).json(allWomen);
});

const fetchSingleWomen = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const singleWomen = await Women.findById(id);

  if (!singleWomen) {
    res.status(404).json("Person not found");
  }

  res.status(200).json(singleWomen);
});

const addWomen = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      age,
      aadharNumber,
      religion,
      caste,
      education,
      village,
      district,
      state,
      maritalStatus,
      businesses,
      MOVEprogrameeStage,
      stage,
    } = req.body;

    let businessIds = [];
    for (let business of businesses) {
      let currbusiness = await Business.create(business);
      businessIds.push(currbusiness._id);
    }
    // Create a new instance of the Women model
    const newWoman = await Women.create({
      name,
      age,
      aadharNumber,
      religion,
      caste,
      education,
      village,
      district,
      state,
      maritalStatus,
      businesses: businessIds,
      MOVEprogrameeStage,
      stage,
    });

    // Respond with the saved woman
    res.status(201).json(newWoman);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Duplicate key error: Aadhar number must be unique" });
    }
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = { fetchAllWomen, fetchSingleWomen, addWomen };
