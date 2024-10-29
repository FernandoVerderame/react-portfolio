import projectsStyle from "./Projects.module.scss";
import { FaGithub as GitHub } from "react-icons/fa";

const Projects = () => {
    return (
        <>
            <section id={`${projectsStyle.projects}`}>
                <div className="container">
                    <div className="row g-3 align-items-center justify-content-center">
                        <div className="col-12">
                            <h2 className={`${projectsStyle.title}`}>Progetti</h2>
                        </div>

                        <div className="col-12">
                            <div className={`${projectsStyle.card}`}>
                                <div className={`${projectsStyle.leftCard}`}>
                                    <h3 className={`${projectsStyle.projectTitle}`}>Titolo</h3>
                                    <div className={`${projectsStyle.descriptionContainer}`}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate mollitia a non dolore rerum aliquam eligendi, similique, incidunt repudiandae pariatur perferendis enim? Dolorum maiores numquam hic adipisci iste nam non.
                                            Fugit voluptates iusto delectus nesciunt obcaecati autem sit libero, rerum atque dolorum quae optio doloribus exercitationem labore? Doloribus dolorem quibusdam at ab quisquam modi, id ullam illum eveniet esse velit!
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore iusto doloremque, corrupti magnam asperiores omnis quis nemo consectetur maiores facilis iste nisi voluptate ipsum tenetur non nihil quia repellat suscipit.
                                            Reiciendis quasi nemo et atque inventore quisquam veritatis recusandae deleniti tenetur? Ducimus voluptas autem aliquam et ad, explicabo alias laboriosam rem animi, voluptate dolore minus soluta nihil nulla id omnis?</p>
                                    </div>
                                    <h4 className={`${projectsStyle.technologiesTitle}`}>Tecnologie utilizzate:</h4>
                                    <ul className={`${projectsStyle.technologiesList}`}>
                                        <li>html</li>
                                        <li>scss</li>
                                        <li>javascript</li>
                                    </ul>
                                    <div className={`${projectsStyle.divider}`}></div>
                                    <div className={`${projectsStyle.btnSection}`}>
                                        <GitHub className={`${projectsStyle.button}`} />
                                    </div>
                                </div>
                                <div className={`${projectsStyle.rightCard}`}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;