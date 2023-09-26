import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import styles from './experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h3>
        Experience <FontAwesomeIcon className={styles.icon} icon={faComputer} />
      </h3>
      <div>
        <div className={styles.containerWork}>
          <p>02/2023 - Present</p>
          <h5>Frontend Developer</h5>
          <h6>Fortisoft</h6>
          <p>
            • I do frontend tasks for clients in the US, I have been working on this project for
            months in which I use technologies such as React.js, CSS, Material UI, Mapbox, Context,
            among others. In addition to the English language to communicate with the client.
          </p>
        </div>
        <div className={styles.containerWork}>
          <p>04/2023 - 07/2023</p>
          <h5>Data Engineer</h5>
          <h6>Fortisoft</h6>
          <p>• In this project I did some tasks with Python, AWS, Snowflake, SQL, among others.</p>
        </div>
        <div className={styles.containerWork}>
          <p>10/2022 - 12/2022</p>
          <h5>Frontend Developer</h5>
          <h6>Ingenieria SCH SRL</h6>
          <p>
            • Software developer for traffic lights (frontend). In this job I use Javascript, React,
            Rest API, HTML, CSS, Postman.
          </p>
        </div>
        <div className={styles.containerWork}>
          <p>09/2022 - Present</p>
          <h5>Teacher/Teacher Assistant</h5>
          <h6>CEPIT IT School</h6>
          <p>
            • I answer students queries as regards different programming languages and frameworks
            (Javascript, Node.js, React.js, Git/Github, Scrum). I am follow students progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
