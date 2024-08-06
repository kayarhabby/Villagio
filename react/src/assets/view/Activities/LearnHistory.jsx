import ActivitiesTemplate from "./ActivitiesTemplate.jsx";
import {useTranslation} from "react-i18next";

export default function LearnHistory() {
    const { t } = useTranslation('activities');
    const descriptionActivitie = t('learnHistory.desc');
    const imageSrc = 'src/assets/images/Summer_villa_emilia.jpg';
    const imageTitle = t('learnHistory.title');


    return (
        <>
            <ActivitiesTemplate descActivitie={descriptionActivitie} source={imageSrc} title={imageTitle} alt={imageTitle} />
        </>
    )
}
