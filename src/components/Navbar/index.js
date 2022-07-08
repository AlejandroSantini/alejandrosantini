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
        <Link to={'aboutMe'} spy={true} smooth={true} duration={500} className={styles.navbarName}>
          <FontAwesomeIcon className={styles.navbarIcon} icon={faBoltLightning} /> Alejandro Santini
        </Link>
        {/* <div onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div> */}
        <ul>
          <li>
            <Link
              to={'aboutMe'}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={'skills'}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to={'projects'}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to={'contact'}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
