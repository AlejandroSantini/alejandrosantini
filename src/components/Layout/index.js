import React from 'react';
import NavBar from '../Navbar';
import About from '../About';
import Footer from '../Footer';
import Skills from '../Skills';
import Projects from '../Projects';
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
