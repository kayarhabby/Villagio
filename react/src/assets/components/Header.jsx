import { useNavigate } from "react-router-dom";
import HeaderText from "./HeaderText.jsx";
import React from "react";

export default function Header() {

    const navigate = useNavigate();

    const goToVillaBookPage = (name) => {
        navigate(`/villa/book/${encodeURIComponent(name)}`);
    };

    const pages = [
        {
            id: 1,
            title: "Villa Bastilicata Grande",
            desc: "This is a perfect villa with spa center and hot tub for private, family and corporate rest in Le Marche region in Italy, with best nature views.",
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            link: "/leMarche",
            region: "Le Marche",
            price: "Prices start at: $630 for 3 nights (+taxes and fees)"
        },
        {
            id: 2,
            title: "Seaside Villa Tuscany Maremma",
            desc: "A beautiful villa in one of the most attractive destinations of Italy – in Maremma coastline area, in northwestern Italy.",
            src: "/src/assets/images/Seaside_Villa_Tuscany_Maremma.jpg",
            link: "/lazio",
            region: "Lazio",
            price: "Prices start at: $474 for 3 nights (+taxes and fees)"
        },
        {
            id: 3,
            title: "Beachfront Villa Casa Aurora",
            desc: "A wonderful fully equipped beachfront villa in Lazio, the home of Rome, where you’ll can get your best vacation memories.",
            src: "/src/assets/images/Beachfront_Villa_Casa_Aurora.jpg",
            link: "/lazio",
            region: "Lazio",
            price: "Prices start at: $360 for 3 nights (+taxes and fees)"
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
