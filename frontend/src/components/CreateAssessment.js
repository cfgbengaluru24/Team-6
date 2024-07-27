import React, { useState } from 'react';
import axios from 'axios';
import './CreateAssessment.css';

const CreateAssessment = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctOption: 0 }]);

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctOption: 0 }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/assessments/create', { title, questions });
      alert('Assessment created successfully');
    } catch (error) {
      console.error('Error creating assessment:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create Assessment</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {questions.map((question, qIndex) => (
          <div key={qIndex}>
            <input
              type="text"
              placeholder="Question Text"
              value={question.questionText}
              onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
            />
            {question.options.map((option, oIndex) => (
              <input
                key={oIndex}
                type="text"
                placeholder={`Option ${oIndex + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
              />
            ))}
            <select
              value={question.correctOption}
              onChange={(e) => handleQuestionChange(qIndex, 'correctOption', parseInt(e.target.value))}
            >
              {question.options.map((_, oIndex) => (
                <option key={oIndex} value={oIndex}>
                  {`Option ${oIndex + 1}`}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="button" onClick={addQuestion}>Add Question</button>
        <button type="submit">Create Assessment</button>
      </form>
    </>
  );
};

export default CreateAssessment;