import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import styles from './skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <div>
        <h4>
          Hard Skills <FontAwesomeIcon className={styles.icon} icon={faScrewdriverWrench} />
        </h4>
        <ul>
          <li>English B1 Intermediate</li>
          <li>Javascript, Python + Fast API</li>
          <li>React.js + Router, Redux, Forms</li>
          <li>HTML, CSS</li>
          <li>Node.js, NPM, Express.js, JOI</li>
          <li>API REST, Postman, Jest</li>
          <li>Mongo DB, SQL</li>
          <li>Git, GitHub</li>
          <li>Vue.js</li>
          <li>React Native</li>
          <li>Scrum, Trello, Astah</li>
          <li>Figma, Adobe Xd</li>
        </ul>
      </div>
      <div>
        <h4>
          Soft Skills <FontAwesomeIcon className={styles.icon} icon={faPeopleGroup} />
        </h4>
        <ul>
          <li>Agile Methodologies</li>
          <li>Teamwork</li>
          <li>Adaptability and Flexibility</li>
          <li>Communication</li>
          <li>Productivity and Organization</li>
          <li>Creativity and innovation</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
