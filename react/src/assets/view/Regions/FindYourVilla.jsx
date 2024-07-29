import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import React from "react";
import ImageCard from "../Activities/ImageCard.jsx";
import SearchForm from "../../components/SearchForm.jsx";

export default function FindYourVilla() {
    const imageSrc = 'src/assets/images/Seaside_Villa_Tuscany_Maremma.jpg';
    const imageTitle = 'Find Your Villa';
    const imageAlt = 'Seaside villa Tuscany Maremma';

    return (
        <div  className="home">
            <Navbar/>
            <ImageCard src={imageSrc} title={imageTitle}  alt={imageAlt} />
            <section className="fyv-container">
                <p>
                    Booking your dream villa with Villagio company is really fast and safe. Just set check-in and check-out dates, view the description, choose your villa, provide details for reservation and pay online! Your perfect vacation is several clicks away!
                </p>
                <SearchForm />
            </section>
            <Footer/>
        </div>
    )
}
