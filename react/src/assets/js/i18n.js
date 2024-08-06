// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import des fichiers de langue
import enNavbar from '../translations/en/navbar.json';
import frNavbar from '../translations/fr/navbar.json';
import enFooter from '../translations/en/footer.json';
import frFooter from '../translations/fr/footer.json';
import enHeader from '../translations/en/header.json';
import frHeader from '../translations/fr/header.json';
import enTestimonial from '../translations/en/testimonial.json';
import frTestimonial from '../translations/fr/testimonial.json';
import enVilla from '../translations/en/villa.json';
import frVilla from '../translations/fr/villa.json';
import enService from '../translations/en/service.json';
import frService from '../translations/fr/service.json';
import enActivities from '../translations/en/activities.json';
import frActivities from '../translations/fr/activities.json';
import enAside from '../translations/en/aside.json';
import frAside from '../translations/fr/aside.json';
import enFindYourVilla from '../translations/en/findyourvilla.json';
import frFindYourVilla from '../translations/fr/findyourvilla.json';

// Configuration de i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                navbar: enNavbar,
                footer: enFooter,
                header: enHeader,
                testimonial: enTestimonial,
                villa: enVilla,
                service: enService,
                activities: enActivities,
                aside: enAside,
                findyourvilla: enFindYourVilla,
            },
            fr: {
                navbar: frNavbar,
                footer: frFooter,
                header: frHeader,
                testimonial: frTestimonial,
                villa: frVilla,
                service: frService,
                activities: frActivities,
                aside: frAside,
                findyourvilla: frFindYourVilla,
            }
        },
        lng: 'en', // Langue par défaut
        fallbackLng: 'en', // Langue de repli en cas de non disponibilité
        ns: ['navbar', 'footer', 'header', 'testimonial', 'villa', 'service', 'activities', 'aside','findyourvilla'], // Noms des namespaces
        defaultNS: 'navbar', // Namespace par défaut
        interpolation: {
            escapeValue: false, // Pas nécessaire pour React
        }
    });

export default i18n;
