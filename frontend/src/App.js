
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAssessment from './components/CreateAssessment';
import TakeAssessment from './components/TakeAssessment';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/create-assessment" element={<CreateAssessment />} />
          <Route path="/take-assessment" element={<TakeAssessment />} />
        </Routes>
    </Router>
  );
};

export default App;