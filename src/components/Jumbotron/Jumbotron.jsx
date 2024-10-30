import { NavLink } from "react-router-dom";
import jumbotronStyle from "./Jumbotron.module.scss";
import imgPortfolio from "../../assets/images/img-portfolio.jpeg";
import { scroller } from "react-scroll";

const Jumbotron = () => {

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            offset: -100
        });
    };

    return (
        <>
            <section id="jumbotron" className={`${jumbotronStyle.jumboSection}`}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <span className={`${jumbotronStyle.hello}`}>Ciao! Sono</span>
                            <h1 className={`${jumbotronStyle.title}`}><span>Fernando Verderame</span><br />Jr. Full-Stack Web Developer</h1>
                            <p className={`${jumbotronStyle.description}`}>Costruisco soluzioni web che uniscono creatività e funzionalità, perché credo che ogni linea di codice possa migliorare il modo in cui le persone vivono il digitale.</p>
                            <div className={`${jumbotronStyle.buttonGroup}`}>
                                <div>
                                    <NavLink
                                        className={`${jumbotronStyle.button}`}
                                        onClick={() => scrollToSection('projects')}>
                                        Progetti
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <img
                                src={imgPortfolio}
                                alt="img-portfolio"
                                className={`${jumbotronStyle.img}`}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Jumbotron;