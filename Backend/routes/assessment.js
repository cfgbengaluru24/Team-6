const express = require('express');
const router = express.Router();
const { Assessment, Response } = require('../models/assessment');

// Create a new assessment
router.post('/create', async (req, res) => {
  try {
    const { title, questions } = req.body;
    const assessment = new Assessment({ title, questions });
    await assessment.save();
    res.status(201).json(assessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all assessments
router.get('/', async (req, res) => {
  try {
    const assessments = await Assessment.find();
    res.status(200).json(assessments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Submit a response
router.post('/submit', async (req, res) => {
  try {
    const { assessmentId, userId, answers } = req.body;
    const assessment = await Assessment.findById(assessmentId);
    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }

    let score = 0;
    assessment.questions.forEach((question, index) => {
      if (question.correctOption === answers[index]) {
        score += 1;
      }
    });

    const response = new Response({ assessmentId, userId, answers, score });
    await response.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;