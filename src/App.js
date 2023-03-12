import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact';

import Project from './pages/Project';
import Header from "./components/Header";

// Must be your top level component and render all necessary children components

function App() {
  return (
    <Router>
    <div className="App">
      <Header>
        <Routes>
          <Route path="/" element={<Home name={"Keanu"} title={"Web Developer & Photographer"}/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project" element={<Project/>} />
        </Routes>
      </Header>
    </div>
    </Router>
  );
}

export default App;
