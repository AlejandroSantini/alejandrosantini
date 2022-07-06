import React from 'react';
import NavBar from '../mayusnavbar';
import About from '../About';
import Footer from '../mayusfooter';
import Skills from '../mayusskills';
import Projects from '../mayusprojects';
import Contact from '../mayuscontact';
import styles from './layout.module.css';

const Layout = () => {
  return (
    <main className={styles.container}>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Layout;
