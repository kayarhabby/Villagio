import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterLinks from "./FooterLinks.jsx";
import RegionButtons from "./RegionButtons.jsx";
import RecommendSection from "./RecommendSection.jsx";

export default function AsideComponent() {
    const { t } = useTranslation('aside');

    const recentComments = t('recentComments', { returnObjects: true });

    const regionButtonsData = {
        title: t('regionButtons.title'),
        regions: t('regionButtons.regions', { returnObjects: true })
    };

    const recommendSectionData = {
        title: t('recommendTitle'),
        imageSrc: "/src/assets/images/Cottage_Monte_Bianco.jpg",
        altText: t('recommendSection.imageAltText'),
        villaName: t('recommendSection.villaName'),
        price: t('recommendSection.price'),
        buttonText: t('recommendSection.buttonText')
    };

    return (
        <aside>
            <RegionButtons {...regionButtonsData} />
            <RecommendSection {...recommendSectionData} />
            <section>
                <FooterLinks title={t('recentCommentsTitle')} links={recentComments} />
            </section>
        </aside>
    )
}
