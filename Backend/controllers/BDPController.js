
const asyncHandler = require('express-async-handler');
const BDP = require('../models/BDPModel');

const addBDPData = asyncHandler(async (req, res) => {

    const {
        executiveSummary,
        industryAnalysis,
        venture,
        productionPlan,
        operationsPlan,
        marketingPlan,
        organizationalPlan,
        assessmentRisk,
        financialPlan,
        appendix
    } = req.body
    try {

        const newBDPData = await BDP.create({
            executiveSummary,
            industryAnalysis,
            venture,
            productionPlan,
            operationsPlan,
            marketingPlan,
            organizationalPlan,
            assessmentRisk,
            financialPlan,
            appendix
        });

        res.status(201).json(newBDPData);
    } catch (error) {
        res.status(400).json("Failed to add BDP data" + error);
    }
});

module.exports = { addBDPData }
