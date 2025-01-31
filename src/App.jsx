import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
    return(
      <>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
      </>
  );
  
}

export default App
