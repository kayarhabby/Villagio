import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import du hook useTranslation
import Navbar from "../../components/Navbar.jsx";
import ImageCard from "../Activities/ImageCard.jsx";
import TextTestimonial from "./TextTestimonial.jsx";
import Navigation from "./Navigation.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/Footer.jsx";

function TestimonialPage() {
    const { t } = useTranslation('testimonial'); // Initialiser le hook
    const { name } = useParams();
    const navigate = useNavigate();

    // Les témoignages traduits depuis i18next
    const guests = [
        {
            id: 1,
            key: 'joeDoe',
            src: "/src/assets/images/joedoeM.jpg",
            alt: t(`guests.joeDoe.alt`),
            name: t(`guests.joeDoe.name`),
            comments: t(`guests.joeDoe.comments`)
        },
        {
            id: 2,
            key: 'kimLee',
            src: "/src/assets/images/kimLeeM.jpg",
            alt: t(`guests.kimLee.alt`),
            name: t(`guests.kimLee.name`),
            comments: t(`guests.kimLee.comments`)
        },
        {
            id: 3,
            key: 'tomHendrix',
            src: "/src/assets/images/tomHendrixM.jpg",
            alt: t(`guests.tomHendrix.alt`),
            name: t(`guests.tomHendrix.name`),
            comments: t(`guests.tomHendrix.comments`)
        }
    ];

    const currentPage = guests.findIndex(guest => guest.name === decodeURIComponent(name));

    const nextPage = () => {
        const nextIndex = currentPage < guests.length - 1 ? currentPage + 1 : currentPage;
        navigate(`/testimonial/${encodeURIComponent(guests[nextIndex].name)}`);
    };

    const prevPage = () => {
        const prevIndex = currentPage > 0 ? currentPage - 1 : currentPage;
        navigate(`/testimonial/${encodeURIComponent(guests[prevIndex].name)}`);
    };

    if (currentPage === -1) {
        return <div>{t('guestReviews.notFound')}</div>; // Message de non-trouvé traduit
    }

    return (
        <div className="template home">
            <Navbar/>
            <ImageCard src={guests[currentPage].src} title={guests[currentPage].name}
                       alt={guests[currentPage].alt}/>
            <main>
                <section>
                    <TextTestimonial text={guests[currentPage].comments}/>
                    <Navigation
                        currentPage={currentPage}
                        totalPages={guests.length}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        pages={guests}
                    />
                </section>
                <Aside/>
            </main>
            <Footer/>
        </div>
    );
}

export default TestimonialPage;
