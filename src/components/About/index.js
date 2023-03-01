import img from '../../assets/images/developer.png';
import styles from './about.module.css';

const AboutMe = () => {
  const constantedeprueba = "chau";
  console.log(constantedeprueba)
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
          I am <span>Alejandro Santini</span>. Software Developer and Advanced student of
          Information Systems Engineering. I believe that software is a very important tool that can
          optimize many processes in organizations.
        </p>
        <a href={'/AlejandroSantiniCV.pdf'} download="Alejandro Santini CV.pdf">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
