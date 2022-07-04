//import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <Link to={'aboutMe'} className={styles.navbarName}>
          <FontAwesomeIcon className={styles.navbarIcon} icon={faBoltLightning} /> Alejandro Santini
        </Link>
        {/* <div onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div> */}
        <ul>
          <li>
            <Link to={'aboutMe'}>Home</Link>
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
