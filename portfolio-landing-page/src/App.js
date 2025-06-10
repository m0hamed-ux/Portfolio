import React from 'react';
import './styles/main.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;