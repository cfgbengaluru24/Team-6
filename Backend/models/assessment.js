const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: String,
  options: [String],
  correctOption: Number,
});

const AssessmentSchema = new mongoose.Schema({
  title: String,
  questions: [QuestionSchema],
});

const ResponseSchema = new mongoose.Schema({
  assessmentId: mongoose.Schema.Types.ObjectId,
  userId: String,
  answers: [Number],
  score: Number,
});

const Assessment = mongoose.model('Assessment', AssessmentSchema);
const Question = mongoose.model('Question', QuestionSchema);
const Response = mongoose.model('Response', ResponseSchema);

module.exports = {
  Assessment,
  Question,
  Response,
};