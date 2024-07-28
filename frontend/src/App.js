
import './App.css';
import About from './components/about';
import NavBar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import Learning from './components/learning';
import Contact from './components/contact';
import BDP from './components/BDP';
import Login from './components/login';
import Signup from './components/signup';
import Footer from './components/footer';
import React from 'react';
import CreateAssessment from './components/CreateAssessment';
import TakeAssessment from './components/TakeAssessment';
import TrainerDashboard from './components/TrainerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';


const App = () => {
  const footerRef = useRef(null);
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar scrollToFooter={scrollToFooter}/>
      <Routes>
        <Route exact path="/" element={<About/>}/>
        <Route exact path="/learn" element={<Learning/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        {user && (user.role=='trainer' || user.role=='admin') && <Route exact path="/bdp" element={<TrainerDashboard/>}/>}
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        {user && (user.role=='trainer' || user.role=='admin') && <Route exact path="/dashboard" element={<TrainerDashboard/>}/>}
        {user && (user.role=='trainer' || user.role=='admin') && <Route exact path="/create-assessment" element={<CreateAssessment/>}/>}
        <Route path="/assess" element={<TakeAssessment />} />
      </Routes>
      </BrowserRouter>
      <Footer ref={footerRef}/>
  </div>
  );
};

export default App;