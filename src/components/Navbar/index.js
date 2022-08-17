import { Link } from 'react-scroll';
import HambMenu from '../HambMenu';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <HambMenu />
        <Link to={'aboutMe'} spy={true} smooth={true} duration={500} className={styles.navbarName}>
          Alejandro Santini
        </Link>
        <ul className={styles.links}>
          <li>
            <Link
              to={'aboutMe'}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={0}
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
              offset={40}
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
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to={'contact'} spy={true} smooth={true} offset={0} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
