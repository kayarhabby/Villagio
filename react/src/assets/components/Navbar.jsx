import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
    const [dropdowns, setDropdowns] = useState({
        region: false,
        activities: false,
        user: false,
    });

    const toggleDropdown = (dropdown) => {
        setDropdowns({
            ...dropdowns,
            [dropdown]: !dropdowns[dropdown],
        });
    };

    const closeDropdown = (dropdown) => {
        setDropdowns({
            ...dropdowns,
            [dropdown]: false,
        });
    };

    return (
        <nav id="navbar">
            <section>
                <section className="menu-hamburger">
                    <a href="#"><i className="fa-solid fa-bars"></i></a>
                    <a href="#"><i className="fa-solid fa-x"></i></a>
                </section>

                <a href="/">Villagio</a>
                <ul>
                    <li
                        className="dropdown"
                        onMouseEnter={() => toggleDropdown('region')}
                        onMouseLeave={() => closeDropdown('region')}
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
                    <li><Link to="/service">SERVICE</Link></li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => toggleDropdown('activities')}
                        onMouseLeave={() => closeDropdown('activities')}
                    >
                        <Link className="dropdown-toggle" to="/activities">
                            ACTIVITIES
                        </Link>
                        {dropdowns.activities && (
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/CapriBoatTourFromSorrento">CAPRI BOAT TOUR FROM
                                    SORRENTO</Link></li>
                                <li><Link className="dropdown-item" to="/SightseeingNaples">SIGHTSEEING NAPLES TOUR FOR
                                    FAMILIES</Link></li>
                                <li><Link className="dropdown-item" to="/LearnHistory">LEARN HISTORY: HALF-DAY TRIP TO
                                    POMPEII</Link></li>
                                <li><Link className="dropdown-item" to="/WineAndCheese">Wine and Cheese Tour at Le
                                    Marche’s Popular Wine Estate</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/findYourVilla">FIND YOUR VILLA</Link></li>
                </ul>
            </section>
            <section>
                <select className="form-select" id="langues" name="langues">
                    <option selected>English</option>
                    <option value="1">Français</option>
                </select>
                <select className="form-select" id="monnaie" name="monnaie">
                    <option selected>Euro</option>
                    <option value="1">USD</option>
                </select>
                <section
                    className="dropdown"
                    onMouseEnter={() => toggleDropdown('user')}
                    onMouseLeave={() => closeDropdown('user')}
                >
                    <div className="btn-group">
                        <button
                            data-bs-toggle="dropdown"
                            data-bs-display="static"
                            aria-expanded="false"
                            onClick={() => toggleDropdown('user')}
                        >
                            <img src="/src/assets/images/account.png" alt="account image" />
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
        </nav>
    );
}
