import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.scss';
import React, { useState, useEffect } from 'react';
import lightLogo from "../Assets/img/logo_w.svg"; 
import darkLogo from "../Assets/img/logo_b.svg"; 

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);   
    }, []);

    return (
        <>
            <header
                className={`header ${isSticky ? "sticky" : ""} ${
                    location.pathname === "/" ? "homepage" : ""
                }`}
                id="header"
            >
                <nav className="navbar container">
                    <section className="navbar-left">
                        <Link className="brand" to={"/"}>
                            <img src={location.pathname === "/" ? isSticky ? darkLogo : lightLogo : darkLogo }  alt="Artisanal Parfum House"  />
                        </Link>
                        
                        <div className="burger" onClick={toggleMenu}>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                        </div>
                    </section>
                    <section className={`navbar-center `}>
                        <span className={`overlay ${isMenuOpen ? "is-active" : ""}`} onClick={closeMenu} ></span>
                        <div id="menu" className={`menu ${isMenuOpen ? "is-active" : ""}`} >
                            <div className="menu-header">
                                <div className="menu-arrow close"></div>
                                <div className="menu-title">Artisanal Parfum House</div>
                            </div>
                            <ul>
                                <li className="menu-item">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/about-us" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
                                        About us
                                    </NavLink>
                                </li>
                                <li className="menu-item">  
                                    <NavLink to="/our-service" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
                                        Our services
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/fragrance-laboratory" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
                                        Fragrance laboratory
                                    </NavLink> 
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/industry-insights" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
                                        Industry insights
                                    </NavLink> 
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}>
                                        Contact us
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/user-panel/#/login" target='_blank' className={({ isActive }) => (isActive ? "menu-link active" : "menu-link login-link")}>
                                        Login
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </section>
                </nav>
            </header>
        </>
    );
}

export default Header;
