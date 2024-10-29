import projectsStyle from "./Projects.module.scss";
import { FaGithub as GitHub } from "react-icons/fa";
import projects from "../../database/projects.js"

const Projects = () => {

    return (
        <>
            <section id={`${projectsStyle.projects}`}>
                <div className="container">
                    <div className="row g-5 align-items-center justify-content-center">
                        <div className="col-12">
                            <h2 className={`${projectsStyle.title}`}>Progetti</h2>
                        </div>

                        {projects.map((project, index) => (
                            <div key={index} className="col-12">
                                <div className={projectsStyle.card}>
                                    <div className={projectsStyle.leftCard}>

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
                                                <GitHub className={projectsStyle.button} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={projectsStyle.rightCard}>

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