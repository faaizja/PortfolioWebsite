import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import Navbar from './NavBar';
import About from "./About"
import Error from "./Error"
import Projects from "./Projects"
import Pharmabotics from './Pharmabotics';
import DbHeroes from './DbHeroes';
import StudySpotr from './StudySpotr';
import FootballWizard from './FootballWizard';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        {/* <Route path='/FootballWizard' element={<FootballWizard />} /> */}
        <Route path='/StudySpotr' element={<StudySpotr />} />
        <Route path='/Pharmabotics' element={<Pharmabotics />} />
        <Route path='/DbHeroes' element={<DbHeroes />} />
        <Route path = "*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;