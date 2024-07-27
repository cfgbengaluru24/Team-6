import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TakeAssessment.css';

const TakeAssessment = ({ userId }) => {
  const [assessments, setAssessments] = useState([]);
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/assessments/');
        setAssessments(response.data);
      } catch (error) {
        console.error('Error fetching assessments:', error);
      }
    };

    fetchAssessments();
  }, []);

  const handleAnswerChange = (qIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/assessments/submit', {
        assessmentId: selectedAssessment._id,
        userId,
        answers,
      });
      const score = response.data.score;
      const total_answers = answers.length;
      alert(`Assessment submitted. Your score: ${score}`);
      if (score/total_answers >= 0.8) {
        alert('Congratulations! You have been promoted to a trainer.');
        await axios.patch(`http://localhost:5000/api/users/${userId}`, {
          role: 'trainer',
        });
      }
    } catch (error) {
      console.error('Error submitting assessment:', error);
    }
  };

  return (
    <div>
      <h2>Take Assessment</h2>
      <select onChange={(e) => setSelectedAssessment(assessments.find(a => a._id === e.target.value))}>
        <option value="">Select Assessment</option>
        {assessments.map((assessment) => (
          <option key={assessment._id} value={assessment._id}>
            {assessment.title}
          </option>
        ))}
      </select>
      {selectedAssessment && (
        <form onSubmit={handleSubmit}>
          {selectedAssessment.questions.map((question, qIndex) => (
            <div key={qIndex}>
              <p>{question.questionText}</p>
              {question.options.map((option, oIndex) => (
                <label id='mcq-option' key={oIndex}>
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    value={oIndex}
                    onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button type="submit">Submit Assessment</button>
        </form>
      )}
    </div>
  );
};

export default TakeAssessment;