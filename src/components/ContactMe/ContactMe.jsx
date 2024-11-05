import contactMeStyle from "./ContactMe.module.scss"
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { FaGithub as GitHub } from "react-icons/fa";

const ContactMe = () => {
    return (
        <>
            <section id="contact-me" className={`${contactMeStyle.contactMeSection}`}>
                <div className="container">
                    <div className="row g-3 align-items-center justify-content-center">
                        <div className="col-12">
                            <h2 className={`${contactMeStyle.title}`}>Contattami</h2>
                        </div>

                        <div className={`col-lg-4 ${contactMeStyle.card}`}>
                            <h3>N. di Telefono</h3>
                            <p className="mb-5 mb-lg-0">(+39) 340 7501645</p>
                        </div>
                        <div className={`col-lg-4 ${contactMeStyle.card}`}>
                            <h3>Email</h3>
                            <p className="mb-5 mb-lg-0">fer.verderame@gmail.com</p>
                        </div>
                        <div className={`col-lg-4 ${contactMeStyle.card}`}>
                            <h3>Links</h3>

                            <div className={`${contactMeStyle.buttonGroup}`}>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/fernando-verderame/" target="_blank" rel="noopener noreferrer">
                                            <Linkedin className={`${contactMeStyle.social}`} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/FernandoVerderame" target="_blank" rel="noopener noreferrer">
                                            <GitHub className={`${contactMeStyle.social}`} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactMe;