import { NavLink } from "react-router-dom";
import { scroller } from 'react-scroll';
import navbarStyle from './Navbar.module.scss';

const Navbar = () => {

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            offset: -100
        });
    };

    return (
        <>
            <header className={`${navbarStyle.header}`}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <div className="left-nav">
                            <NavLink className={`${navbarStyle.logo}`}
                                onClick={() => scrollToSection('jumbotron')}>
                                Portfolio
                            </NavLink>
                        </div>

                        <div className="right-nav d-flex justify-content-end">
                            <ul className={`navbar-nav d-flex flex-row ${navbarStyle.nav}`}>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => `nav-link ${isActive ? navbarStyle.active : ''}`}
                                        onClick={() => scrollToSection('about-me')}
                                    >Su di me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => `nav-link ${isActive ? navbarStyle.active : ''}`}
                                        onClick={() => scrollToSection('skills')}
                                    >Skills</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => `nav-link ${isActive ? navbarStyle.active : ''}`}
                                        onClick={() => scrollToSection('projects')}
                                    >Progetti</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => `nav-link ${isActive ? navbarStyle.active : ''}`}
                                        onClick={() => scrollToSection('contact-me')}
                                    >Contattami</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    );
};

export default Navbar;