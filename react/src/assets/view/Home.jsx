import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SearchForm from "../components/SearchForm.jsx";
import Header from "../components/Header.jsx";
import React from "react";
import VillaGridCard from "../components/VillaGridCard.jsx";
import Testimonial from "./Testimoniale/Testimonial.jsx";
import MainHeaderTextContent from "../components/MainHeaderTextContent.jsx";

export default function Home() {


    return (
        <div className="home">
            <Navbar />
            <main>
                <Header />
                <MainHeaderTextContent />
                <VillaGridCard />
                <Testimonial />
            </main>
            <Footer />
        </div>
    )
}
