import styles from './skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <div>
        <h4>Hard Skills</h4>
        <ul>
          <li>English Pre-Intermediate</li>
          <li>Scrum</li>
          <li>Trello</li>
          <li>Adobe XD</li>
          <li>Astah</li>
          <li>Git/GitHub</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>NPM</li>
          <li>Express.js</li>
          <li>API REST</li>
          <li>Mongo DB</li>
          <li>JOI</li>
          <li>Unit test</li>
          <li>React.js</li>
        </ul>
      </div>
      <div>
        <h4>Soft Skills</h4>
        <ul>
          <li>Capacity for Teamwork.</li>
          <li>Adaptability and Flexibility.</li>
          <li>Communication.</li>
          <li>Productivity and Organization.</li>
          <li>Creativity.</li>
          <li>Responsibility.</li>
          <li>Constancy.</li>
          <li>Agile Methodologies.</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
