import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Design from './pages/design';
import Dev from './pages/dev';
import Resume from './pages/resume';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/softwaredevelopment" element={<Dev />} />
        <Route path="/uxdesign" element={<Design/>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
