import React from "react";
import { useTranslation } from 'react-i18next';
import ActivitiesCard from "./Activities/ActivitiesCard.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Activities() {
    const { t } = useTranslation('activities');

    const activities = [
        {
            id: 1,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            title: t('sightseeingNaples.title'),
            desc: t('sightseeingNaples.desc'),
            linkActivitie: t('sightseeingNaples.link')
        },
        {
            id: 2,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            title: t('wineAndCheese.title'),
            desc: t('wineAndCheese.desc'),
            linkActivitie: t('wineAndCheese.link')
        },
        {
            id: 3,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            title: t('capriBoatTour.title'),
            desc: t('capriBoatTour.desc'),
            linkActivitie: t('capriBoatTour.link')
        },
        {
            id: 4,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            title: t('learnHistory.title'),
            desc: t('learnHistory.desc'),
            linkActivitie: t('learnHistory.link')
        }
    ];

    return (
        <div className="home">
            <Navbar />
            <main className="main-content-activities">
                <h1>{t('activitiesTitle')}</h1>
                <section className="activitie-container">
                    {activities.map((activity) => (
                        <ActivitiesCard key={activity.id} {...activity} />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}
