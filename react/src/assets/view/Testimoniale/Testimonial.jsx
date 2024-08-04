// Testimonial.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Testimonial() {
    const { t } = useTranslation('testimonial');

    const navigate = useNavigate();

    const goToTestimonialPage = (name) => {
        navigate(`/testimonial/${encodeURIComponent(name)}`);
    };

    const guests = [
        {
            id: 1,
            key: 'joeDoe',
            src: "/src/assets/images/joeDoe.jpg",
            alt: "JOE DOE",
            name: "JOE DOE"
        },
        {
            id: 2,
            key: 'kimLee',
            src: "/src/assets/images/kimLee.jpg",
            alt: "KIM LEE",
            name: "KIM LEE"
        },
        {
            id: 3,
            key: 'tomHendrix',
            src: "/src/assets/images/tomHendrix.jpg",
            alt: "TOM HENDRIX",
            name: "TOM HENDRIX"
        }
    ];

    return (
        <section id="guest">
            <h2>{t('guestReviews')}</h2>
            <div className="guest-container-card">
                {guests.map((guest) => (
                    <div key={guest.id}>
                        <article className="guest-container">
                            <img src={guest.src} alt={t(`guests.${guest.key}.alt`)} className="cercle-img" />
                            <section>
                                <p>{t(`guests.${guest.key}.comments`)}</p>
                                <button className="btn" onClick={() => goToTestimonialPage(guest.name)}>
                                    {t(`guests.${guest.key}.name`)}
                                </button>
                            </section>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonial;
