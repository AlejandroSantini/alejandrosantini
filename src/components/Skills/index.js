import styles from './skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <div>
        <h4>Hard Skills</h4>
        <ul>
          <li>English Pre-Intermediate</li>
          <li>Scrum, Trello, Astah, Office Package </li>
          <li>Figma, Adobe Xd</li>
          <li>Git, GitHub</li>
          <li>HTML, CSS, Javascript</li>
          <li>Node.js, NPM, Express.js, JOI</li>
          <li>API REST, Postman, Mongo DB, Jest</li>
          <li>React.js + Router, Redux, Forms</li>
        </ul>
      </div>
      <div>
        <h4>Soft Skills</h4>
        <ul>
          <li>Capacity for Teamwork</li>
          <li>Adaptability and Flexibility</li>
          <li>Communication</li>
          <li>Productivity and Organization</li>
          <li>Creativity</li>
          <li>Responsibility</li>
          <li>Constancy</li>
          <li>Agile Methodologies</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
