import React, { useState } from 'react';

const TraineeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    village: '',
    district: '',
    religion: '',
    caste: '',
    educationalQualification: '',
    dailyEarnings: '',
    savings: ''
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
      name: '',
      age: '',
      mobile: '',
      village: '',
      district: '',
      religion: '',
      caste: '',
      educationalQualification: '',
      dailyEarnings: '',
      savings: ''
    });
  };

  const formFields = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Age', type: 'number', name: 'age' },
    { label: 'Mobile', type: 'text', name: 'mobile' },
    { label: 'Village', type: 'text', name: 'village' },
    { label: 'District', type: 'text', name: 'district' },
    {
      label: 'Religion', type: 'select', name: 'religion', options: [
        'Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Other', 'Atheist', 'None'
      ]
    },
    {
      label: 'Caste', type: 'select', name: 'caste', options: [
        'SC', 'ST', 'OBC', 'Others'
      ]
    },
    {
      label: 'Educational Qualification', type: 'select', name: 'educationalQualification', options: [
        'Standard 1 – 5', 'Standard 6 –10 (not completed)', 'Completed standard 10',
        'Standard 11 – 12 (not completed)', 'Completed standard 12', 'Degree (incomplete)',
        'Graduate', 'Other (specify)'
      ]
    },
    { label: 'Daily Earnings', type: 'number', name: 'dailyEarnings' },
    { label: 'Savings', type: 'number', name: 'savings' }
  ];

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <div key={index}>
          <label>{field.label}:</label>
          {field.type === 'select' ? (
            <select name={field.name} value={formData[field.name]} onChange={handleChange} required>
              <option value="">Select {field.label}</option>
              {field.options.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </select>
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
      <button type="submit">Add Person</button>
    </form>
  );
};

export default TraineeForm;