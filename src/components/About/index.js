import img from '../../assets/images/developer.png';
import styles from './about.module.css';

const AboutMe = () => {
  return (
    <section id="aboutMe" className={styles.container}>
      <img src={img} alt="Developer image" />
      <div>
        <div className={styles.containerH4}>
          <h4>
            C:\{'>'}
            <span className={styles.typewriter}>SoftwareDeveloper</span>
            <span className={styles.intermittent}>
              <span className={styles.background}>_</span>
            </span>
          </h4>
        </div>
        <p>
          I am <span>Alejandro Santini</span>. Information Systems Engineering student. Passionate
          about technology. I like challenges and want to learn new tools to improve in development.
        </p>
        <a href={'/AlejandroSantiniCV.pdf'} download="Alejandro Santini CV.pdf">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
