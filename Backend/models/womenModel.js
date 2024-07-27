const mongoose = require("mongoose");

const womenModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    aadharNumber: { type: String, required: true, unique: true },
    religion: {
      type: String,
      required: true,
      enum: [
        "Hindu",
        "Muslim",
        "Christian",
        "Sikh",
        "Jain",
        "Buddhist",
        "Others",
      ],
    },
    caste: {
      type: String,
      required: true,
      enum: ["General", "OBC", "SC", "ST", "Others"],
    },
    education: {
      type: String,
      required: true,
      enum: ["10th", "12th", "Graduate", "Post Graduate", "Others"],
    },
    village: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    maritalStatus: {
      type: String,
      required: true,
      enum: ["Married", "Unmarried", "Divorced", "Widow", "Others"],
    },
    businesses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Business",
      },
    ],
    MOVEprogrameeStage: {
      type: String,
      required: true,
      enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    stage: {
      type: String,
      required: true,
      enum: ["BusinessDevelopmentPlan", "DataCollection"],
    },
  },
  { timestamps: true }
);

womenModel.pre("create", function () {
  this.populate("businesses");
});

womenModel.pre("find", function () {
    this.populate("businesses");
  });
const Women = mongoose.model("Women", womenModel);

module.exports = Women;
