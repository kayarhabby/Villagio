import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FormHome from "../components/FormHome.jsx";
import Header from "../components/Header.jsx";
import React from "react";
import GuestGridCard from "../components/GuestGridCard.jsx";
import VillaGridCard from "../components/VillaGridCard.jsx";

export default function Home() {

    return (
        <>
            <Navbar />

            <main>
                <Header />
                <section id="main-header-text-content">
                    <h1>
                        The villa rental expert for your vacation
                    </h1>
                    <p>
                        Villagio offers diverse villas in different regions to help you spend your dream vacation. Book
                        your
                        villa online quickly and safely.
                    </p>
                    <FormHome />
                </section>
                <VillaGridCard />
                <GuestGridCard />
            </main>
            <Footer />
        </>
    )
}
