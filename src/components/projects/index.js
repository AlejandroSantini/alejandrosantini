import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h3>Projects</h3>
      <div>
        <div>
          <h4>Trackgenix</h4>
          <p>This project was each project and work team.</p>
          <a href="https://alejandrosantini.github.io/BaSP-M2022-Etapa-1/semana-07/views">
            See Project <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div>
          <h4>Trackgenix</h4>
          <p>idaosidas asiaosda asodaosda sododd</p>
          <a href="https://alejandrosantini.github.io/BaSP-M2022-Etapa-1/semana-07/views">
            See Project <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div>
          <h4>Trackgenix</h4>
          <p>lorem hola nada que ver este texto es para probar</p>
          <a href="https://alejandrosantini.github.io/BaSP-M2022-Etapa-1/semana-07/views">
            See Project <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div>
          <h4>Trackgenix</h4>
          <p>idaosidas asiaosda testeando paaa alta paginita me estoy mandando perro</p>
          <a href="https://alejandrosantini.github.io/BaSP-M2022-Etapa-1/semana-07/views">
            See Project <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
