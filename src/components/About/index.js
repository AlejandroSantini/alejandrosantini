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
          I am <span>Alejandro Santini</span>. Software Developer with 2 years of experience as a
          Frontend Developer. Currently advanced student of Software Engineering. I believe that
          software is a very important tool that can optimize many processes.
        </p>
        <a href={'/AlejandroSantiniCV.pdf'} download="Alejandro Santini CV.pdf">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
