import ActivitiesTemplate from "./ActivitiesTemplate.jsx";

export default function SightseeingNaples() {

    const descriptionActivitie = "Explore a beautiful Naples with your family on this kid-friendly tour.\n" +
        "\n" +
        "It will let you Dig into the history, art, cuisine and traditions of Naples with and won’t be boring for your kids because of an interactive tour designed with kids in mind. You’ll be guided by English-speaking guide for a fun and educational experience, be prepraed for your kids to be very much engaged! Sightseeing can be overwhelming for children when it involves waiting and listening about uninteresting stuff. With this tour, your children are the center of the activity.\n" +
        "\n" +
        "With privileged, reserved admission to historic sites, there’s no boredom for kids and familities. Lots of interactive visual learning tools, pop-up books, iPad games and non trivial games are waiting for you and your family.\n" +
        "\n" +
        "The customized tour engages children in effortless learning, so you can be sure your kids will learn something new. Each tour is rich in art, culture and history.\n" +
        "\n" +
        "Your child will enjoy a feast for the senses as he or she takes in new colors, sights and sounds and diversity.";

    const imageSrc = 'src/assets/images/Lucca_Summer_Festival.jpg';
    const imageTitle = 'Sightseeing Naples Tour for Families';

    return (
        <>
            <ActivitiesTemplate descActivitie={descriptionActivitie} source={imageSrc} title={imageTitle} />
        </>
    )
}
