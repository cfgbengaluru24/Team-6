const mongoose = require("mongoose");

const BDPModel = mongoose.Schema({
    executiveSummary: { type: String, required: true },
    industryAnalysis: { type: String, required: true },
    venture: { type: String, required: true },
    productionPlan: { type: String, required: true },
    operationsPlan: { type: String, required: true },
    marketingPlan: { type: String, required: true },
    organizationalPlan: { type: String, required: true },
    assessmentRisk: { type: String, required: true },
    financialPlan: { type: String, required: true },
    appendix: { type: String, required: true },
});

const BDP = mongoose.model("BDP", BDPModel);

module.exports = BDP;