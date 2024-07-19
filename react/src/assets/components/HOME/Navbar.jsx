import React, { useState } from 'react';
import '../../css/Navbar.css';

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
        <header id="navbar">
            <div>
                <div className="menu-hamburger">
                    <a href="#"><i className="fa-solid fa-bars"></i></a>
                    <a href="#"><i className="fa-solid fa-x"></i></a>
                </div>
                <p>MENU</p>
            </div>

            <a href="/react/public">Villagio</a>
            <nav>
                <ul>
                    <li
                        className="dropdown"
                        onMouseEnter={() => toggleDropdown('region')}
                        onMouseLeave={() => toggleDropdown('region')}
                    >
                        <a className="dropdown-toggle" href="#" role="button">
                            REGION
                        </a>
                        {dropdowns.region && (
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/aostaValley">AOSTA VALLEY</a></li>
                                <li><a className="dropdown-item" href="/lazio">LAZIO</a></li>
                                <li><a className="dropdown-item" href="/leMarche">LE MARCHE</a></li>
                                <li><a className="dropdown-item" href="/allVillas">ALL VILLAS</a></li>
                                <li><a className="dropdown-item" href="/findYourVilla">FIND YOUR VILLA</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="/service">SERVICE</a></li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => toggleDropdown('activities')}
                        onMouseLeave={() => toggleDropdown('activities')}
                    >
                        <a className="dropdown-toggle" href="/activities" role="button">
                            ACTIVITIES
                        </a>
                        {dropdowns.activities && (
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/CapriBoatTourFromSorrento">CAPRI BOAT TOUR FROM SORRENTO</a></li>
                                <li><a className="dropdown-item" href="/SightseeingNaples">SIGHTSEEING NAPLES TOUR FOR FAMILIES</a></li>
                                <li><a className="dropdown-item" href="/LearnHistory">LEARN HISTORY: HALF-DAY TRIP TO POMPEII</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="/news">NEWS</a></li>
                </ul>
            </nav>
            <div className="icon-container">
                <div className="icon-reseaux-social">
                    <p>TRIPADVISOR</p>
                </div>
                <div className="icon-reseaux-social">
                    <p className="text-reseaux-social">FOURSQUARE</p>
                </div>
                <div className="icon-reseaux-social">
                    <p className="text-reseaux-social">INSTAGRAM</p>
                </div>
                <div className="icon-reseaux-social">
                    <p className="text-reseaux-social">FACEBOOK</p>
                </div>
                <select className="form-select">
                    <option selected>English</option>
                    <option value="1">Français</option>
                </select>
                <select className="form-select">
                    <option selected>Euro</option>
                    <option value="1">USD</option>
                </select>
            </div>
        </header>
    );
}
