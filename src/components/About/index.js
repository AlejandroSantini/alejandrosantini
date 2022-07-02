import img from '../../assets/images/alejandrosantini.png';
import styles from './about.module.css';

const AboutMe = () => {
  return (
    <section id="aboutMe" className={styles.container}>
      <img src={img} alt="Alejandro santini photo" />
      <p>
        I am 22 years old. I am passionate about technology. I like challenges and I am willing to
        learn any new tool to grow in software development.
      </p>
    </section>
  );
};

export default AboutMe;
