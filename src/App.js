import { IconContext } from 'react-icons';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.sass';

function App() {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <div className="App">
        <div className='right-fixed'>
          <Navbar />
        </div>
        <div className='left-content'>
          <Home />
          <About />
          <Project />
          <Skills />
          <Contact />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default App;
