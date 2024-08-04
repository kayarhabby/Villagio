import ActivitiesTemplate from "./ActivitiesTemplate.jsx";
import {useTranslation} from "react-i18next";

export default function CapriBoat() {
    const { t } = useTranslation('activities');
    const descriptionActivitie = t('capriBoatTour.desc');
    const imageSrc = 'src/assets/images/Cottage_Monte_Bianco.jpg';
    const imageTitle = t('capriBoatTour.title');

    return (
        <>
            <ActivitiesTemplate descActivitie={descriptionActivitie} source={imageSrc} title={imageTitle} alt={imageTitle} />
        </>
    )
}
