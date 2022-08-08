import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import ScrollButton from './components/ScrollTopBtn';

function App() {
  return (
      <>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ScrollButton />
      </>
  );
}

export default App;