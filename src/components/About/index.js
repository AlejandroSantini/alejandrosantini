import img from '../../assets/images/alejandrosantini2.png';
import styles from './about.module.css';

const AboutMe = () => {
  return (
    <section id="aboutMe" className={styles.container}>
      <img src={img} alt="Alejandro santini photo" />
      <div>
        <h4>
          C:\{'>'}
          Software Developer
          {/* <span className={styles.typewriter}>Software Developer</span> */}
          <span className={styles.intermittent}>_</span>
        </h4>
        <p>
          Information Systems Engineering student. I am passionate about technology. I like
          challenges and want learn any new tool to improve in software development.
        </p>
        <a href={'../../assets/docs/Alejandro-Santini-CV.pdf'} download="Alejandro Santini CV.pdf">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
