import { useState } from 'react';
import { Link } from 'react-scroll';
import { Twirl as Hamburger } from 'hamburger-react';
import styles from './hambmenu.module.css';

const HambMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!isOpen);
  };

  return (
    <nav>
      <div className={styles.containerHamb}>
        <Hamburger
          className={styles.hambMenu}
          toggled={isOpen}
          toggle={setOpen}
          onClick={handleChange}
        />
        <div>
          {isOpen && (
            <ul className={styles.menu}>
              <li>
                <Link
                  onClick={handleChange}
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
                  onClick={handleChange}
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
                  onClick={handleChange}
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
                <Link
                  onClick={handleChange}
                  to={'contact'}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HambMenu;
