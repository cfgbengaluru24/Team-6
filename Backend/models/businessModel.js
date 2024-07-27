const mongoose = require("mongoose");

const businessModel = mongoose.Schema(
  {
    businessName: { type: String, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    numberOfCustomers: { type: Number, required: true },
    peopleEmployed: { type: Number, required: true },
    businessLocation: { type: String, required: true },
    rawMaterialSource: { type: String, required: true },
    initialInvestment: { type: Number, required: true },
    monthlyRevenue: { type: Number, required: true },
    monthlyExpenses: { type: Number, required: true },
    percentageOfProfitReinvested: { type: Number, required: true },
    percentageOfProfitSaved: { type: Number, required: true },
    stage: {
      type: String,
      required: true,
      enum: ["success", "failed", "ongoing"],
      default: "ongoing",
    },
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessModel);

module.exports = Business;
