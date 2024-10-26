import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import Navbar from './NavBar';
import About from "./About"
import Error from "./Error"
import Projects from "./Projects"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path = "*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;