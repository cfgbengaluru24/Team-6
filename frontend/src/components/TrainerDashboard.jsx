import React, { useState } from "react";
import TraineeForm from "./TraineeForm";
import EndLineForm from "./EndlineForm";
import "./TrainerDashboard.css";
import axios from "axios";

const TrainerDashboard = () => {
  const [people, setPeople] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showEndlineForm, setShowEndlineForm] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const addPerson = (person) => {
    setPeople([...people, person]);
    setShowForm(false);
  };

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  const addEndlineData = (data) => {
    // Handle endline data submission
    setShowEndlineForm(false);
  };

  return (
    <div className="trainer-dashboard">
      <h1>Trainer Dashboard</h1>
      <button onClick={() => setShowForm(true)}>Add Person</button>
      {/* {showForm && <TraineeForm onSubmit={addPerson} />} */}
      <div className={`form-container ${showForm ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setShowForm(false)}>
          ×
        </button>
        <TraineeForm onSubmit={addPerson} />
      </div>
      <div className={`endline-form-container ${showEndlineForm ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setShowEndlineForm(false)}>
          ×
        </button>
        <EndLineForm onSubmit={addEndlineData} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Village</th>
            <th>District</th>
            <th>Religion</th>
            <th>Caste</th>
            <th>Educational Qualification</th>
            <th>Daily Earnings</th>
            <th>Savings</th>
            <th>Add BDP Data</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.mobile}</td>
              <td>{person.village}</td>
              <td>{person.district}</td>
              <td>{person.religion}</td>
              <td>{person.caste}</td>
              <td>{person.educationalQualification}</td>
              <td>{person.dailyEarnings}</td>
              <td>{person.savings}</td>
              <td>
                <button onClick={() => setShowEndlineForm(true)}>→</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bot-div">
      {showIframe && (<iframe src="https://www.chatbase.co/chatbot-iframe/t9GgGq2-yYXKuf5gfMp1Z" width="300px" height="400px" style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} frameBorder="0"></iframe>)}
      <button onClick={toggleIframe} className="bot-icon">
        <img
          src="bot.png"
          alt="Bot Icon"
          className="bot-icon-img"
        />
      </button>
      </div>
      
      
    </div>
  );
};

export default TrainerDashboard;
