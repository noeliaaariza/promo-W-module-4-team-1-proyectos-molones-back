import "../../scss/components/Preview.scss";
import PropTypes from "prop-types";

function ProjectCard({ project }) {
  return (
    <article className="card" id="hover-card">
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Personal project card</span>
      </h2>

      <div className="card__author">
        <div
          className="card__authorPhoto"
          style={{
            backgroundImage: `url(${project.photo_author})`,
          }}
        ></div>
        <p className="card__job">
          {project.job_author || "Full stack Developer"}
        </p>
        <h3 className="card__name centerName">
          {project.name_author || "Margarita Hamilton"}
        </h3>
      </div>

      <div className="card__project">
        <h3 className="card__name">{project.name_project || "cREACTivas"}</h3>
        <p className="card__slogan">
          {project.slogan_project || "Hasta el push y más allá"}
        </p>

        <p className="card__description">
          {project.description_project ||
            "Nunca nos damos por vencidas, encontraremos la pieza que falta en el código hasta lograr aquello que se busca. Ningún bug nos doblegará, ningún conflicto podrá con nosotras."}
        </p>

        <div className="card__technicalInfo">
          <p className="card__technologies">
            {project.technologies_project || "React JS - HTML - CSS"}
          </p>

          <a
            className="icon icon__www"
            href={project.demo_url}
            title="Haz click para ver el proyecto online"
          >
            Web link
          </a>
          <a
            className="icon icon__github"
            href={project.repo_url}
            title="Haz click para ver el código del proyecto"
          >
            GitHub link
          </a>
        </div>
      </div>
    </article>
  );
}
ProjectCard.propTypes = {
  infoProject: PropTypes.object,
};
export default ProjectCard;
