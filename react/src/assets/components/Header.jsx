import { useNavigate } from "react-router-dom";
import HeaderText from "./HeaderText.jsx";
import React from "react";
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t } = useTranslation('header');
    const navigate = useNavigate();

    const goToVillaBookPage = (name) => {
        navigate(`/villa/book/${encodeURIComponent(name)}`);
    };

    const pages = [
        {
            id: 1,
            title: t('villa1.title'),
            desc: t('villa1.desc'),
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            link: "/leMarche",
            region: "Le Marche",
            price: t('villa1.price')
        },
        {
            id: 2,
            title: t('villa2.title'),
            desc: t('villa2.desc'),
            src: "/src/assets/images/Seaside_Villa_Tuscany_Maremma.jpg",
            link: "/lazio",
            region: "Lazio",
            price: t('villa2.price')
        },
        {
            id: 3,
            title: t('villa3.title'),
            desc: t('villa3.desc'),
            src: "/src/assets/images/Beachfront_Villa_Casa_Aurora.jpg",
            link: "/lazio",
            region: "Lazio",
            price: t('villa3.price')
        }
    ];

    return (
        <header>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    {pages.map((page, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {pages.map((page, index) => (
                        <HeaderText
                            link={page.link}
                            region={page.region}
                            title={page.title}
                            desc={page.desc}
                            price={page.price}
                            src={page.src}
                            key={page.id}
                            isActive={index === 0} // Set the first item as active
                            goToVillaBookPage={goToVillaBookPage}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
}
