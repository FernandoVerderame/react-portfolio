import projectsStyle from "./Projects.module.scss";
import { FaGithub as GitHub } from "react-icons/fa";
import projects from "../../database/projects.js";
import ControlledCarousel from "../Carousel/ControlledCarousel.jsx";

const Projects = () => {

    return (
        <>
            <section id="projects" className={`${projectsStyle.projectsSection}`}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <h2 className={`${projectsStyle.title}`}>Progetti</h2>
                        </div>

                        {projects.map((project, index) => (
                            <div key={index} className="col-12">
                                <div className={projectsStyle.card}>

                                    <div className={projectsStyle.leftCard}>
                                        <ControlledCarousel images={project.images} />
                                    </div>

                                    <div className={projectsStyle.rightCard}>
                                        <div className="top">
                                            <h3 className={projectsStyle.projectTitle}>{project.title}</h3>
                                            <div className={projectsStyle.descriptionContainer}>
                                                <p>{project.description}</p>
                                            </div>
                                        </div>

                                        <div className="bottom">
                                            <h4 className={projectsStyle.technologiesTitle}>Tecnologie utilizzate:</h4>
                                            <ul className={projectsStyle.technologiesList}>
                                                {project.technologies.map((tech, i) => (
                                                    <li key={i}>{tech}</li>
                                                ))}
                                            </ul>
                                            <div className={projectsStyle.divider}></div>
                                            <div className={projectsStyle.btnSection}>
                                                <a href={`${project.github}`}>
                                                    <GitHub className={projectsStyle.button} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;