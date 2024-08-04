import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterLinks from "./FooterLinks.jsx";
import VillagioText from "./VillagioText.jsx";

export default function Footer() {
    const { t } = useTranslation('footer');

    const recentNews = [
        { text: t('recentNews.0'), href: '#' },
        { text: t('recentNews.1'), href: '#' },
        { text: t('recentNews.2'), href: '#' },
        { text: t('recentNews.3'), href: '#' },
        { text: t('recentNews.4'), href: '#' },
    ];

    const links = [
        { text: t('links.0'), href: '#' },
        { text: t('links.1'), href: '#' },
        { text: t('links.2'), href: '#' },
        { text: t('links.3'), href: '#' },
        { text: t('links.4'), href: '#' },
    ];

    return (
        <footer>
            <section className="footer-text-container">
                <section>
                    <VillagioText
                        title={t('aboutUs.title')}
                        descriptions={t('aboutUs.description')}
                    />
                    <VillagioText
                        title={t('multilingualVillagio.title')}
                        descriptions={t('multilingualVillagio.description')}
                    />
                </section>

                <FooterLinks title={t('recentNewsTitle')} links={recentNews} />
                <FooterLinks title={t('linksTitle')} links={links} />
            </section>

            <section className="footer-bas-page">
                <div>{t('footerBase.copyright')}</div>
                <div>{t('footerBase.address')}</div>
            </section>
        </footer>
    );
}
