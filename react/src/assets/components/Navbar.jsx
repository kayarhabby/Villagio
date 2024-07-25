import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
    const [dropdowns, setDropdowns] = useState({
        region: false,
        activities: false,
    });

    const toggleDropdown = (dropdown) => {
        setDropdowns({
            ...dropdowns,
            [dropdown]: !dropdowns[dropdown],
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
                        onMouseLeave={() => toggleDropdown('region')}
                    >
                        <a className="dropdown-toggle" href="#" >
                            REGION
                        </a>
                        {dropdowns.region && (
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/region/1">AOSTA VALLEY</Link></li>
                                <li><Link className="dropdown-item" to="/region/2">LAZIO</Link></li>
                                <li><Link className="dropdown-item" to="/region/3">LE MARCHE</Link></li>
                                <li><Link className="dropdown-item" to="/allVillas">ALL VILLAS</Link></li>
                                <li><Link className="dropdown-item" to="/findYourVilla">FIND YOUR VILLA</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/service">SERVICE</Link></li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => toggleDropdown('activities')}
                        onMouseLeave={() => toggleDropdown('activities')}
                    >
                        <Link className="dropdown-toggle" to="/activities" role="button">
                            ACTIVITIES
                        </Link>
                        {dropdowns.activities && (
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/CapriBoatTourFromSorrento">CAPRI BOAT TOUR FROM SORRENTO</Link></li>
                                <li><Link className="dropdown-item" to="/SightseeingNaples">SIGHTSEEING NAPLES TOUR FOR FAMILIES</Link></li>
                                <li><Link className="dropdown-item" to="/LearnHistory">LEARN HISTORY: HALF-DAY TRIP TO POMPEII</Link></li>
                                <li><Link className="dropdown-item" to="/WineAndCheese">Wine and Cheese Tour at Le Marche’s Popular Wine Estate</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </section>
            <section>
                <select className="form-select">
                    <option selected>English</option>
                    <option value="1">Français</option>
                </select>
                <select className="form-select">
                    <option selected>Euro</option>
                    <option value="1">USD</option>
                </select>
            </section>
        </nav>
    );
}
