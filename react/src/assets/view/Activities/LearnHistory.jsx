import ActivitiesTemplate from "./ActivitiesTemplate.jsx";

export default function LearnHistory() {

    const descriptionActivitie = "Interested in the history of Italy? Then you definitely must visit a UNESCO-listed remains of the Roman town of Pompeii! We offer this trip for 3-hour tour from Naples. All the transfers are provided.\n" +
        "\n" +
        "We’ll pick you up at the villa and will and will ride in an air-conditioned minibus to the Pompeii archaeological park. Gain priority entry with your informative guide and tour the highlights of the site, frozen in time by ash from a massive eruption of Mt Vesuvius in AD 79.\n" +
        "\n" +
        "You’ll have a chance to Witness relics such as the piazza, baths, brothel and fresco-covered walls of Vetti’s House as your guide shares haunting stories about the lives and deaths of the long-gone inhabitants.\n" +
        "\n" +
        "This will be definitely unforgettable trip for people who want to have active rest!";

    return (
        <>
            <ActivitiesTemplate descActivitie = {descriptionActivitie} />
        </>
    )
}
