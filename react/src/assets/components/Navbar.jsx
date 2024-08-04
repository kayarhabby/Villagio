// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../js/i18n';
import '../css/Navbar.css';

export default function Navbar() {
    const { t } = useTranslation('navbar');
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

    const handleLanguageChange = (event) => {
        const selectedLang = event.target.value; // recupérer la valeur 'fr' ou 'en' mis dans l'attribut value de select
        // console.log(selectedLang);
        i18n.changeLanguage(selectedLang);
    };

    return (
        <nav id="navbar">
            <article className="villagio_icon">
                <section
                    className={`menu-hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <a href="#"><i className="fa-solid fa-bars"></i></a>
                    <a href="#"><i className="fa-solid fa-x"></i></a>
                </section>
                <a href="/">Villagio</a>
            </article>
            <article className={`villagio_link_item ${isMenuOpen ? 'is-visible' : ''}`}>
                <section>
                    <ul>
                        <li
                            className="dropdown"
                            onClick={(e) => handleDropdownClick(e, 'region')}
                        >
                            <a className="dropdown-toggle" href="#">
                                {t('menu.region')}
                            </a>
                            {dropdowns.region && (
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/region/1">{t('regions.aostaValley')}</Link></li>
                                    <li><Link className="dropdown-item" to="/region/2">{t('regions.lazio')}</Link></li>
                                    <li><Link className="dropdown-item" to="/region/3">{t('regions.leMarche')}</Link></li>
                                    <li><Link className="dropdown-item" to="/allVillas">{t('regions.allVillas')}</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/service" onClick={() => setMenuOpen(false)}>{t('menu.service')}</Link></li>
                        <li
                            className="dropdown"
                            onClick={(e) => handleDropdownClick(e, 'activities')}
                        >
                            <Link className="dropdown-toggle" to="/activities">
                                {t('menu.activities')}
                            </Link>
                            {dropdowns.activities && (
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/CapriBoatTourFromSorrento">{t('activities.capriBoatTour')}</Link></li>
                                    <li><Link className="dropdown-item" to="/SightseeingNaples">{t('activities.sightseeingNaples')}</Link></li>
                                    <li><Link className="dropdown-item" to="/LearnHistory">{t('activities.learnHistory')}</Link></li>
                                    <li><Link className="dropdown-item" to="/WineAndCheese">{t('activities.wineAndCheese')}</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/findYourVilla" onClick={() => setMenuOpen(false)}>{t('menu.findYourVilla')}</Link></li>
                    </ul>
                </section>
                <section>
                    <select className="form-select" id="langues" name="langues" onChange={handleLanguageChange}>
                        <option value="en">{t('language.default')}</option>
                        <option value="fr">{t('language.fr')}</option>
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
                                    <li><Link className="dropdown-item" to="/inscription">{t('user.inscription')}</Link></li>
                                    <li><Link className="dropdown-item" to="/connexion">{t('user.connexion')}</Link></li>
                                </ul>
                            )}
                        </div>
                    </section>
                </section>
            </article>
        </nav>
    );
}
