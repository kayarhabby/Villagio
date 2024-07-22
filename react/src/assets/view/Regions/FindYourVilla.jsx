import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import React from "react";
import ImageCard from "../Activities/ImageDisplay.jsx";
import '../../css/ImageCard.css'
import '../../css/findYourVilla.css'
import FormHome from "../../components/FormHome.jsx";

export default function () {
    const imageSrc = 'src/assets/images/Seaside_Villa_Tuscany_Maremma.jpg';
    const imageTitle = 'Find Your Villa';
    const imageAlt = 'Seaside villa Tuscany Maremma';

    return (
        <div>
            <Navbar/>
            <ImageCard src={imageSrc} title={imageTitle}  alt={imageAlt} />
            <section className="fyv-container">
                <p>
                    Booking your dream villa with Villagio company is really fast and safe. Just set check-in and check-out dates, view the description, choose your villa, provide details for reservation and pay online! Your perfect vacation is several clicks away!
                </p>
                <FormHome />
            </section>
            <Footer/>
        </div>
    )
}
