import React from 'react';
import '../../css/Navbar.css';

export default function NavbarRegistrationForm() {

    return (
        <nav id="navbar">
            <section>
                <section className="menu-hamburger">
                    <a href="#"><i className="fa-solid fa-bars"></i></a>
                    <a href="#"><i className="fa-solid fa-x"></i></a>
                </section>

                <a href="/">Villagio</a>
            </section>
            <section>
                <select className="form-select">
                    <option selected>English</option>
                    <option value="1">Français</option>
                </select>
            </section>
        </nav>
    );
}
