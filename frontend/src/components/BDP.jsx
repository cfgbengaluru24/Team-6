import React, { useState } from 'react';
import './BDP.css'; // Import custom CSS

const BDP = () => {
  const [formData, setFormData] = useState({
    introductoryPage: '',
    executiveSummary: '',
    industryAnalysis: '',
    descriptionOfVenture: '',
    productionPlan: '',
    operationsPlan: '',
    marketingPlan: '',
    organizationalPlan: '',
    assessmentOfRisk: '',
    financialPlan: '',
    appendix: ''
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
    // Handle form submission, e.g., send data to the backend or display a summary
    console.log(formData);
  };

  return (
    <div className="container1 mt-5">
      <div className="card shadow p-4">
        <h1 className="mb-4 text-center">Business Development Plan Form</h1>
        <form onSubmit={handleSubmit}>
          {[
            { id: 'introductoryPage', label: 'Introductory Page' },
            { id: 'executiveSummary', label: 'Executive Summary' },
            { id: 'industryAnalysis', label: 'Industry Analysis' },
            { id: 'descriptionOfVenture', label: 'Description of Venture' },
            { id: 'productionPlan', label: 'Production Plan' },
            { id: 'operationsPlan', label: 'Operations Plan' },
            { id: 'marketingPlan', label: 'Marketing Plan' },
            { id: 'organizationalPlan', label: 'Organizational Plan' },
            { id: 'assessmentOfRisk', label: 'Assessment of Risk' },
            { id: 'financialPlan', label: 'Financial Plan' },
            { id: 'appendix', label: 'Appendix (contains backup material)' }
          ].map((field) => (
            <div className="form-group mb-3" key={field.id}>
              <label htmlFor={field.id}>{field.label}:</label>
              <textarea
                className="form-control"
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                rows="3"
              />
            </div>
          ))}
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BDP;
