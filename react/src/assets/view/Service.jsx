import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from "../components/ServiceCard.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Aside from "../components/Aside.jsx";

export default function Service() {
    const { t } = useTranslation('service');

    const services = [
        {
            id: 1,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: t('foodHamper.title') + " image",
            firstTitle: t('foodHamper.title'),
            text: t('foodHamper.text'),
            secondTitle: t('price'),
            price: t('foodHamper.price'),
            days: t('once'),
            accommodation: t('perAccommodation')
        },
        {
            id: 2,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: t('mealCatering.title') + " image",
            firstTitle: t('mealCatering.title'),
            text: t('mealCatering.text'),
            secondTitle: t('price'),
            price: t('mealCatering.price'),
            days: t('perDay'),
            accommodation: t('perAccommodation')
        },
        {
            id: 3,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: t('babySitter.title') + " image",
            firstTitle: t('babySitter.title'),
            text: t('babySitter.text'),
            secondTitle: t('price'),
            price: t('babySitter.price'),
            days: t('perDay'),
            accommodation: t('perGuest')
        },
        {
            id: 4,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: t('weddingsAndBirthdays.title') + " image",
            firstTitle: t('weddingsAndBirthdays.title'),
            text: t('weddingsAndBirthdays.text'),
            secondTitle: t('price'),
            price: t('weddingsAndBirthdays.price'),
            days: t('once'),
            accommodation: t('perAccommodation')
        },
        {
            id: 5,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: t('cleaningService.title') + " image",
            firstTitle: t('cleaningService.title'),
            text: t('cleaningService.text'),
            secondTitle: t('price'),
            price: t('cleaningService.price'),
            days: t('perDay'),
            accommodation: t('perAccommodation')
        },
        {
            id: 6,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: t('carRental.title') + " image",
            firstTitle: t('carRental.title'),
            text: t('carRental.text'),
            secondTitle: t('price'),
            price: t('carRental.price'),
            days: t('perDay'),
            accommodation: t('perAccommodation')
        }
    ];

    return (
        <div className="template home">
            <Navbar />
            <main>
                <section>
                    <div>
                        <h1>{t('serviceTitle')}</h1>
                        {services.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                </section>
                <Aside />
            </main>
            <Footer />
        </div>
    );
}
