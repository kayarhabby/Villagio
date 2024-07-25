import React from "react";
import ActivitiesCard from "./Activities/ActivitiesCard.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../css/ActivitiesCard.css";

export default function () {

    const activities = [
        {
            id: 1,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            title : "Sightseeing Naples Tour for Families",
            desc : "Explore a beautiful Naples with your family on this kid-friendly tour.\n" +
                "\n" +
                "It will let you Dig into the history, art, cuisine and traditions of Naples with and won’t be boring for your kids because of an interactive tour designed with kids in mind. You’ll be guided by English-speaking guide for a fun and educational experience, be prepraed for your kids to be very much engaged!",
            linkActivitie : "/SightseeingNaples"
        },
        {
            id: 2,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            title : "Wine and Cheese Tour at Le Marche’s Popular Wine Estate",
            desc : "Interested in an essential history lesson of Le Marche’s wine culture? We have something winy and tasty for you – a guided tour within one of the region’s oldest wineries, complete with wine tasting of native fine wines served alongside a selective platter of local meats and cheeses. So, you’ll also have a chance to taste Italian cheese.",
            linkActivitie: "/WineAndCheese"
        },
        {
            id: 3,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            title: "Capri Boat Tour from Sorrento",
            desc : "A fun of boat and yoht tours? Discover the alluring island of Capri on a full-day boat tour departing from Sorrento each day! For the visitors of our villa there is even more bonuses!",
            linkActivitie: "/CapriBoatTourFromSorrento"
        },
        {
            id: 4,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            title: "Learn History: Half-day Trip to Pompeii",
            desc : "Interested in the history of Italy? Then you definitely must visit a UNESCO-listed remains of the Roman town of Pompeii! We offer this trip for 3-hour tour from Naples. All the transfers are provided.",
            linkActivitie: "/LearnHistory"
        },
    ]

    return (
        <div className="home">
            <Navbar />
            <main className="main-content-activities">
                <h1>Activities</h1>
                <section class="activitie-container">
                    {activities.map((activitie) => (
                        <ActivitiesCard key={activitie.id} {...activitie} />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    )
}
