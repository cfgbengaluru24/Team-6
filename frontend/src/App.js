
import './App.css';
import About from './components/about';
import NavBar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import Learning from './components/learning';
import Assessment from './components/assessment';
import Contact from './components/contact';
import BDP from './components/BDP';
import Login from './components/login';
import Signup from './components/signup';
import Footer from './components/footer';

function App() {
  const footerRef = useRef(null);
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar scrollToFooter={scrollToFooter}/>
    <Routes>
      <Route exact path="/" element={<About/>}/>
      <Route exact path="/learn" element={<Learning/>}/>
      <Route exact path="/assess" element={<Assessment/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/bdp" element={<BDP/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    <Footer ref={footerRef}/>
  </div>
  );
}

export default App;
