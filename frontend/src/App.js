
import './App.css';
import About from './components/about';
import NavBar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Learning from './components/learning';
import Assessment from './components/assessment';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<About/>}/>
      <Route exact path="/learn" element={<Learning/>}/>
      <Route exact path="/assess" element={<Assessment/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
