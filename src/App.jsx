import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => (
  <div className="font-sans">
    <Header />
    <main>
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
    <footer className="bg-slate-600 text-white py-4 text-center">
      <p>© 2024 Sagar Shirwalkar</p>
    </footer>
  </div>
);

export default App;
