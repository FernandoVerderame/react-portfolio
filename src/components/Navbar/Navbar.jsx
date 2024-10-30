import { NavLink } from "react-router-dom";
import { scroller } from 'react-scroll';
import navbarStyle from './Navbar.module.scss';
import { useState } from "react";

const Navbar = () => {

    const [activeSection, setActiveSection] = useState('');

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
        });
    };

    return (
        <>
            <header className={`${navbarStyle.header}`}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <div className="left-nav">
                            <NavLink className={`${navbarStyle.logo}`} to="/">
                                Fernando
                            </NavLink>
                        </div>

                        <div className="right-nav d-flex justify-content-end">
                            <ul className={`navbar-nav ${navbarStyle.nav}`}>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => `nav-link ${isActive ? navbarStyle.active : ''}`}
                                        onClick={() => scrollToSection('about-us')}
                                    >Su di me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => `nav-link ${isActive ? navbarStyle.active : ''}`}
                                        onClick={() => scrollToSection('skills')}
                                    >Abilità</NavLink>
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
                                        onClick={() => scrollToSection('contact-us')}
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