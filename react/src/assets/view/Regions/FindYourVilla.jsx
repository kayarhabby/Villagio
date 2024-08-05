import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import React from "react";
import ImageCard from "../Activities/ImageCard.jsx";
import SearchForm from "../../components/SearchForm.jsx";
import { useTranslation } from "react-i18next";

export default function FindYourVilla() {
    const { t } = useTranslation('findyourvilla');

    const imageSrc = 'src/assets/images/Seaside_Villa_Tuscany_Maremma.jpg';
    const imageTitle = t('findYourVilla.title'); // Utilisation de la traduction
    const imageAlt = 'Seaside villa Tuscany Maremma';

    return (
        <div className="home">
            <Navbar/>
            <ImageCard src={imageSrc} title={imageTitle} alt={imageAlt} />
            <section className="fyv-container">
                <p>
                    {t('findYourVilla.description')}
                </p>
                <SearchForm />
            </section>
            <Footer/>
        </div>
    )
}
