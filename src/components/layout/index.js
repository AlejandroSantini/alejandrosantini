import React from 'react';
import { Routes, Route, Navigate  } from 'react-router-dom';
import Navbar from '../navbar';
import Header from '../header';
import Home from '../home';
import Footer from '../footer';
import Skills from '../skills';
import Projects from '../projects';
import Contact from '../contact';
// import styles from './app.module.css';

function App() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/skills" element={<Skills />}  />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
