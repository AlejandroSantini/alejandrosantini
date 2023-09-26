import React from 'react';
import NavBar from '../Navbar';
import About from '../About';
import Footer from '../Footer';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import HambMenu from '../HambMenu';
import Experience from '../Experience';
import styles from './layout.module.css';

const Layout = () => {
  return (
    <main className={styles.container}>
      <NavBar />
      <HambMenu />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Layout;
