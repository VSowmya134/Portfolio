import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Skills from "./pages/Skils"
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main>
        <section id="home" className="py-20 md:py-32">
          <Home />
        </section>
        <section id="about" className="py-20 md:py-32">
          <About />
        </section>
        <section id="experience" className="py-20 md:py-32">
          <Experience />
        </section>
        <section id="skills" className="py-20 md:py-32">
          <Skills />
        </section>
        <section id="projects" className="py-20 md:py-32">
          <Projects />
        </section>
        <section id="certifications" className="py-20 md:py-32">
          <Certifications />
        </section>
        <section id="contact" className="py-20 md:py-32">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

