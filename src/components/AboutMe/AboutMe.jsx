import aboutMeStyle from "./AboutMe.module.scss";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { FaGithub as GitHub } from "react-icons/fa";
import { FaDownload as Download } from "react-icons/fa"

const AboutUs = () => {
    return (
        <>
            <section id="about-me" className={`${aboutMeStyle.aboutMeSection}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className={`${aboutMeStyle.title}`}>Su di me</h2>

                            <div className={`${aboutMeStyle.paragraph}`}>
                                <div className="mb-4">
                                    Sono Fernando, uno <span className={`${aboutMeStyle.keyword}`}>sviluppatore full-stack</span> con una forte <span className={`${aboutMeStyle.keyword}`}>passione per il codice ordinato</span> e la cura dei dettagli. Mi dedico a creare soluzioni digitali innovative, sempre orientate a un’esperienza utente eccellente.
                                </div>

                                <div className="mb-4">
                                    I miei studi intensivi, prima con <span className={`${aboutMeStyle.keyword}`}>Boolean</span> e poi con <span className={`${aboutMeStyle.keyword}`}>Experis Academy</span>, mi hanno fornito una base solida sia sul lato front-end (<span className={`${aboutMeStyle.keyword}`}>HTML</span>, <span className={`${aboutMeStyle.keyword}`}>CSS</span>, <span className={`${aboutMeStyle.keyword}`}>JavaScript</span>, <span className={`${aboutMeStyle.keyword}`}>React</span>, <span className={`${aboutMeStyle.keyword}`}>Vue</span>) che su quello back-end (<span className={`${aboutMeStyle.keyword}`}>Node.js</span>, <span className={`${aboutMeStyle.keyword}`}>Express.js</span>, <span className={`${aboutMeStyle.keyword}`}>PHP</span>, <span className={`${aboutMeStyle.keyword}`}>Laravel</span>), insieme alla gestione dei database SQL. Tra i progetti realizzati, ho sviluppato interfacce utente moderne, <span className={`${aboutMeStyle.keyword}`}>API personalizzate</span> e logiche di autenticazione sicure, lavorando sia individualmente che in team.
                                </div>

                                <div className="mb-4">
                                    Ho avuto la fortuna di <span className={`${aboutMeStyle.keyword}`}>viaggiare</span> e <span className={`${aboutMeStyle.keyword}`}>lavorare con persone di diversi background</span>, esperienze che hanno arricchito il mio modo di affrontare le sfide e di migliorare costantemente.
                                </div>

                                <div>
                                    Sono sempre pronto a <span className={`${aboutMeStyle.keyword}`}>imparare</span> e a <span className={`${aboutMeStyle.keyword}`}>mettermi in gioco</span>, per creare soluzioni digitali che abbiano un impatto reale.
                                </div>
                            </div>

                            <div className={`${aboutMeStyle.buttonGroup}`}>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/fernando-verderame/" target="_blank" rel="noopener noreferrer">
                                            <Linkedin className={`${aboutMeStyle.social}`} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/FernandoVerderame" target="_blank" rel="noopener noreferrer">
                                            <GitHub className={`${aboutMeStyle.social}`} />
                                        </a>
                                    </li>
                                </ul>

                                <div>
                                    <a href="/CV_Fernando_Verderame.pdf" download className={`${aboutMeStyle.download}`}>
                                        <Download className="me-3" />
                                        Scarica CV
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;