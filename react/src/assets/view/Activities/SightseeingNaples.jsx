import ActivitiesTemplate from "./ActivitiesTemplate.jsx";
import {useTranslation} from "react-i18next";

export default function SightseeingNaples() {
    const { t } = useTranslation('activities');
    const descriptionActivitie = t('sightseeingNaples.desc');
    const imageSrc = 'src/assets/images/Lucca_Summer_Festival.jpg';
    const imageTitle = t('sightseeingNaples.title');

    return (
        <>
            <ActivitiesTemplate descActivitie={descriptionActivitie} source={imageSrc} title={imageTitle} alt={imageTitle} />
        </>
    )
}
