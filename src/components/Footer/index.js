import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>
        C:\<span>{'>'}</span>Programmed by <span>Alejandro Santini</span>
        <span className={styles.intermittent}>_</span>
      </p>
      <div>
        <a href="https://www.linkedin.com/in/santinialejandro">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.github.com/AlejandroSantini">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/santinialej">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
