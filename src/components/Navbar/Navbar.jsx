import { NavLink } from "react-router-dom";
import { scroller } from 'react-scroll';
import navbarStyle from './Navbar.module.scss';

const Navbar = () => {
    return (
        <>
            <header className={`${navbarStyle.header}`}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <div className="left-nav">
                            <NavLink className={`${navbarStyle.logo}`}>
                                Fernando
                            </NavLink>
                        </div>

                        <div className="right-nav d-flex justify-content-end">
                            <ul className={`navbar-nav ${navbarStyle.nav}`}>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                    >Su di me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                    >Abilità</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                    >Progetti</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
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