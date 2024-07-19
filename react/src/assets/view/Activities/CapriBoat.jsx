import ActivitiesTemplate from "./ActivitiesTemplate.jsx";

export default function CapriBoat() {

    const descriptionActivitie = "A fun of boat and yoht tours? Discover the alluring island of Capri on a full-day boat tour departing from Sorrento each day! For the visitors of our villa there is even more bonuses!\n" +
        "\n" +
        "Cruise around the island to soak up views of unique coastal formations like the Blue and Green Grottoes and the famed Faraglioni rocks, and stop to swim or snorkel right off the boat. Go ashore for free time to explore Capri’s old town, where you can stroll around Piazza Umberto I and wander ancient cobblestone streets. Group size is limited to 12 for a more personalized experience.\n" +
        "\n" +
        "Beeautiful and h high cliffs and colorful harbors are waiting for you – we can stop and you can walk there as long as you want!\n" +
        "\n" +
        "Things you’ll see cruising around the island:\n" +
        "\n" +
        "The statue of the Scugnizzo, the Bay of Marina Piccola, the Grotta Verde,the Grotta del Corallo, the Grotta Bianca, the Natural Arch, Villa Malaparte, the Faraglioni, the Lighthouse at Punta Carena and the Grotta Azzurra – all these great things are waiting for you!\n" +
        "\n" +
        "All our boats are very comfortable with a ample wooden deck space, sofa, seating, cabin and bathroom, so you’ll feel as comfortable as at villa!";

    const imageSrc = 'src/assets/images/Cottage_Monte_Bianco.jpg';
    const imageTitle = 'Capri Boat Tour from Sorrento';

    return (
        <>
            <ActivitiesTemplate descActivitie={descriptionActivitie} source={imageSrc} title={imageTitle} />
        </>
    )
}
