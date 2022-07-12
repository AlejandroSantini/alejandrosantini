import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h3>
        Projects <FontAwesomeIcon className={styles.icon} icon={faCodeMerge} />
      </h3>
      <div>
        <a
          href="https://alejandrosantini.github.io/BaSP-M2022-Etapa-1/Semana-07/views/"
          className={styles.containerProject}
        >
          <a href="https://github.com/AlejandroSantini/BaSP-M2022-Etapa-1">
            <FontAwesomeIcon icon={faCode} />
          </a>
          <div className={styles.containerText}>
            <h4>Landing Trackgenix</h4>
            <p>My first project with html, css and javascript.</p>
          </div>
        </a>
        <a className={styles.containerProject}>
          <a href="https://github.com/BaSP-m2022/samuel-trackgenix-server">
            <FontAwesomeIcon icon={faCode} />
          </a>
          <div className={styles.containerText}>
            <h4>Trackgenix Server</h4>
            <p>It was done as a team (agile methodologies).</p>
          </div>
        </a>
        <a href="https://franco-trackgenix-app.vercel.app/home" className={styles.containerProject}>
          <a href="https://github.com/BaSP-m2022/franco-trackgenix-app">
            <FontAwesomeIcon icon={faCode} />
          </a>
          <div className={styles.containerText}>
            <h4>Trackgenix App</h4>
            <p>It was done as a team (agile methodologies).</p>
          </div>
        </a>
        <a href="https://alejandrosantini.com.ar" className={styles.containerProject}>
          <a href="https://github.com/AlejandroSantini/alejandrosantini.com.ar">
            <FontAwesomeIcon icon={faCode} />
          </a>
          <div className={styles.containerText}>
            <h4>Personal Website</h4>
            <p>Portfolio to show projects and skills.</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
