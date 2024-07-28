import React, { useState } from 'react';

const EndLineForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    startDate: '',
    investment: '',
    loan: '',
    profitPercentage: '',
    educationInstitute: '',
    location: '',
    amountSaved: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      businessName: '',
      startDate: '',
      investment: '',
      loan: '',
      profitPercentage: '',
      educationInstitute: '',
      location: '',
      amountSaved: '',
      feedback: ''
    });
  };

  const formFields = [
    { label: 'Business Name', type: 'text', name: 'businessName' },
    { label: 'Start Date', type: 'date', name: 'startDate' },
    { label: 'Investment', type: 'number', name: 'investment' },
    { label: 'Loan', type: 'number', name: 'loan' },
    { label: 'Profit %', type: 'number', name: 'profitPercentage' },
    { label: 'Education Institute', type: 'text', name: 'educationInstitute' },
    { label: 'Location', type: 'text', name: 'location' },
    { label: 'Amount Saved', type: 'number', name: 'amountSaved' },
    { label: 'Feedback', type: 'textarea', name: 'feedback' }
  ];

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <div key={index}>
          <label>{field.label}:</label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EndLineForm;