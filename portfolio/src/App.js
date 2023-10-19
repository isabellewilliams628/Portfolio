import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js';
import Dev from './pages/dev.js';
import Resume from './pages/resume.js';
import NavBar from './components/navbar.js';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/development" element={<Dev />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
