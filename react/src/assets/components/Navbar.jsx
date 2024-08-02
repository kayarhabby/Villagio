import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
    const [dropdowns, setDropdowns] = useState({
        region: false,
        activities: false,
        user: false,
    });

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = (dropdown) => {
        setDropdowns(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown],
        }));
    };

    const closeAllDropdowns = () => {
        setDropdowns({
            region: false,
            activities: false,
            user: false,
        });
    };

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
        if (isMenuOpen) {
            closeAllDropdowns();
        }
    };

    const handleDropdownClick = (e, dropdown) => {
        e.preventDefault();
        toggleDropdown(dropdown);
    };

    return (
        <nav id="navbar">
            <div className="villagio_icon">
                <section
                    className={`menu-hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <a href="#"><i className="fa-solid fa-bars"></i></a>
                    <a href="#"><i className="fa-solid fa-x"></i></a>
                </section>
                <a href="/">Villagio</a>
            </div>
            <div className={`villagio_link_item ${isMenuOpen ? 'is-visible' : ''}`}>
                <section>
                    <ul>
                        <li
                            className="dropdown"
                            onClick={(e) => handleDropdownClick(e, 'region')}
                        >
                            <a className="dropdown-toggle" href="#">
                                REGION
                            </a>
                            {dropdowns.region && (
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/region/1">AOSTA VALLEY</Link></li>
                                    <li><Link className="dropdown-item" to="/region/2">LAZIO</Link></li>
                                    <li><Link className="dropdown-item" to="/region/3">LE MARCHE</Link></li>
                                    <li><Link className="dropdown-item" to="/allVillas">ALL VILLAS</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/service" onClick={() => setMenuOpen(false)}>SERVICE</Link></li>
                        <li
                            className="dropdown"
                            onClick={(e) => handleDropdownClick(e, 'activities')}
                        >
                            <Link className="dropdown-toggle" to="/activities">
                                ACTIVITIES
                            </Link>
                            {dropdowns.activities && (
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/CapriBoatTourFromSorrento">CAPRI BOAT TOUR
                                        FROM SORRENTO</Link></li>
                                    <li><Link className="dropdown-item" to="/SightseeingNaples">SIGHTSEEING NAPLES TOUR
                                        FOR FAMILIES</Link></li>
                                    <li><Link className="dropdown-item" to="/LearnHistory">LEARN HISTORY: HALF-DAY TRIP
                                        TO POMPEII</Link></li>
                                    <li><Link className="dropdown-item" to="/WineAndCheese">Wine and Cheese Tour at Le
                                        Marche’s Popular Wine Estate</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/findYourVilla" onClick={() => setMenuOpen(false)}>FIND YOUR VILLA</Link></li>
                    </ul>
                </section>
                <section>
                    <select className="form-select" id="langues" name="langues">
                        <option selected>English</option>
                        <option value="1">Français</option>
                    </select>
                    <section
                        className="dropdown"
                        onClick={(e) => handleDropdownClick(e, 'user')}
                    >
                        <div className="btn-group">
                            <button
                                data-bs-toggle="dropdown"
                                data-bs-display="static"
                                aria-expanded="false"
                            >
                                <img src="/src/assets/images/account.png" alt="account image"/>
                            </button>
                            {dropdowns.user && (
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/inscription">Inscription</Link></li>
                                    <li><Link className="dropdown-item" to="/connexion">Connexion</Link></li>
                                </ul>
                            )}
                        </div>
                    </section>
                </section>
            </div>
        </nav>
    );
}
