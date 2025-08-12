import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import Specials from './Components/Specials';
import Testimonials from './Components/Testimonials';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Hero/>
        <Specials/>
        <Testimonials/>
        <About/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
