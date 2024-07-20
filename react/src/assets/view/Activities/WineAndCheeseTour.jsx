import ActivitiesTemplate from "./ActivitiesTemplate.jsx";

export default function () {
    const descriptionActivitie = "Interested in an essential history lesson of Le Marche’s wine culture? We have something winy and tasty for you – a guided tour within one of the region’s oldest wineries, complete with wine tasting of native fine wines served alongside a selective platter of local meats and cheeses. So, you’ll also have a chance to taste Italian cheese.\n" +
        "\n" +
        "The Winse Estate you are going to visit was established in 850, this is one of the most historical winery’s within the Le Marche region of Italy.\n" +
        "\n" +
        "The wines are still produced till today – within the original structure of the historic wine cellar. This is where the tour will begin, where you will be shown around its various purpose built production areas, guided through the history of the founders of the winery and it’s villa estate and showns examples of the winerys bottle archive, whilst learning more about the historical wines produced here including those native to the Le Marche region.\n" +
        "\n" +
        "You’ll be also able to buy some extra-Vergine Olive Oils, and speciality products which may be alternatively chosen or added to your wine tasting experience.";

    const imageSrc = 'src/assets/images/Cottage_Monte_Bianco.jpg';
    const imageTitle = 'Wine and Cheese Tour at Le Marche’s Popular Wine Estate';

    return (
        <>
            <ActivitiesTemplate descActivitie={descriptionActivitie} source={imageSrc} title={imageTitle} alt={imageTitle} />
        </>
    )
}
