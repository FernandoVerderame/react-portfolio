import skillsStyle from "./Skills.module.scss";
import skills from "../../database/skills.js"

const Skills = () => {
    return (
        <>
            <section id={`${skillsStyle.skills}`}>
                <div className="container">
                    <div className="row g-3 align-items-center justify-content-center">
                        <div className="col-12">
                            <h2 className={`${skillsStyle.title}`}>Abilità</h2>
                        </div>

                        {skills.map(({ label, url }, i) => (
                            <div className="col-sm-6 col-md-4 col-lg-2" key={i}>
                                <div className={`card ${skillsStyle.card}`}>
                                    <h4 className={`${skillsStyle.label}`}>{label}</h4>
                                    <figure className="d-flex justify-content-center align-items-center m-0">
                                        <img
                                            src={`/images/skills/${url}`}
                                            alt={label}
                                            className={`${skillsStyle.img}`} />
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;