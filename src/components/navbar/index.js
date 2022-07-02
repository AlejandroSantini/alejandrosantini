//import React, { useState, useEffect } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <Link to="/" className={styles.navbarLogo}>
          Alejandro santini
        </Link>
        {/* <div onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div> */}
        <ul>
          <li>
            <Link to={'aboutMe'}>About</Link>
          </li>
          <li>
            <Link to={'skills'}>Skills</Link>
          </li>
          <li>
            <Link to={'projects'}>Projects</Link>
          </li>
          <li>
            <Link to={'contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
