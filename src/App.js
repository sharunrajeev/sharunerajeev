import Navbar

  from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.sass';

function App() {
  return (
    <div className="App">
      <div className='right-fixed'>
        <Navbar />
      </div>
      <div className='left-content'>
        <Home />
        <About />
        <Project />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
