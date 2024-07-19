import React from 'react';
import ServiceCard from "../components/ServiceCard.jsx";
import Footer from "../components/HOME/Footer.jsx";
import Navbar from "../components/HOME/Navbar.jsx";
import Aside from "../components/Aside.jsx";
import Lemarche from '/src/assets/images/Le_marche_Etna_House.jpg';

export default function Service() {
    const services = [
        {
            id: 1,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            firstTitle: "Food hamper",
            text: "Arriving late to our villa? When the shops are closed? You should not rush out and do the shopping! Book a food hamper and find the indispensable in the villa at your arrival.\n\nFood Hamper can be delivered directly to the villa for arrival. Hampers contain: bread, eggs, salt, pepper, sugar, tea, coffee, milk, butter, ham (200 gr.), salami (200 gr.) 500gr of pasta, 1 tin of Tuna fish, 1 jar of pasta sauce, 1 packet of biscuits, 1 jar of marmalade, 1 bottle of mineral water, 1 bottle of white wine, 1 bottle of red wine, toilet paper, 1 packet of serviettes and 1 bar of soap.",
            secondTitle: "Price",
            price: "$55",
            days: "Once",
            accommodation: "Per Accommodation"
        },
        {
            id: 2,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            firstTitle: "Meal catering",
            text: "Meals a great part of your vacation. And we can simply make it perfect. Though the villas are fully equip with kitchenette, we can make it easier for you. Our beautiful catering service is for meals, either lunch or brunch, by the pool or in the garden, for dinners and lunches, for special events.\n" +
                "\n" +
                "You’ll have a menu with the dishes you can choose. They they are prepared by our professional chefs and will be delivered directly  to the villa at the established time. The dishes can be agreed upon directly with the catering service.\n" +
                "\n" +
                "The price you pay now covers pre-odering a time slot for chefs. You’ll be able to choose dishes and discuss all menus later.",
            secondTitle: "Price",
            price: "$20",
            days: "Per Day",
            accommodation: "Per Accommodation"
        },
        {
            id: 3,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            firstTitle: "Baby sitter",
            text: "Take children with you? Let them have the best vacation and let yourself! Have a free time while our baby sitters take care of your children – we have a lot of interesting things to do – playing, swimming, cooking, etc.\n" +
                "\n" +
                "In our villas it is possible to request the services of a qualified babysitter who can look after your children on those tours, excursions, which are not suitable for them, or simply for a romantic evening.\n" +
                "\n" +
                "The service is agreed upon according to your needs, contact us for availability. The price listed is a deposit that we’ll add to the final service price.",
            secondTitle: "Price",
            price: "$23",
            days: "Per Day",
            accommodation: "Per Guest"
        },
        {
            id: 4,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            firstTitle: "Weddings and birthdays celebration",
            text: "A special service who those who want to spend special days at special places. Let us arrange your  birthday or family reunion, wedding or any other special location  with first hand on advice on suitable properties, areas and activities for a large group in our villas. Each villa comes with a special open air spaces for celebrating.\n" +
                "\n" +
                "Celebrate your wedding in the beautiful place near ocean, perfect setting to enjoy family and friends. You may also have an intimate blessing in the private chapel of the Villa – is this what you have been always dreaming about? Drink a glass of Italian wine around the pool and have a typical Tuscan dinner under magnificent trees.\n" +
                "\n" +
                "We arrange all types of luxury and small weddings – only from Monday to Thursday included and for a max of 40 guests. Wedding planner and catering services upon request. The price listed covers preodering a wedding planner or birthday planner.",
            secondTitle: "Price",
            price: "$250",
            days: "Once",
            accommodation: "Per Accommodation"
        },
        {
            id: 5,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            firstTitle: "Cleaning service",
            text: "All our villas are cleaned regularly. But we also provide extra cleaning services by request – if you need it when the cleaning is not planned.  No matter whether this is a planned or extra booked service, we provide extraordinary levels of cleanliness and superior service, so you never spoil your rest because of uncleaned rooms.\n" +
                "\n" +
                "Our villas cleaning  include housekeeping for your guest rooms, floors, kitchens, bathrooms, restaurants, bars, spas and more depending on a chosen villa. You may also pre-oder it by phone while your stay.\n" +
                "\n" +
                "We always meet the high demands of hospitality business for clearness, so we’ll send several staff workers to your villa to perform full or partial cleaning.",
            secondTitle: "Price",
            price: "$15",
            days: "Per Day",
            accommodation: "Per Accommodation"
        },
        {
            id: 6,
            src: "/src/assets/images/Villa_Bastilicata_Grande.jpg",
            alt: "Villa Bastilica Grande image",
            firstTitle: "Car rental",
            text: "Our car rental service helps you get the advantage of traveling conveniently around the countryside and getting to the nearby cities as well.\n" +
                "\n" +
                "In addition to a wide variety of cars you can choose, we also provide comprehensive car rental deals to suit your needs and budget throughout your stay, no matter how many days you stay.\n" +
                "\n" +
                "As there are a lot of interesting sport activities in different areas, rent a car and drive to enjoy sports in the surrounding area such as skiing, hiking, and fishing.",
            secondTitle: "Price",
            price: "$50",
            days: "Per Day",
            accommodation: "Per Accommodation"
        }

    ];

    return (
        <div id="service">
            <Navbar />
            <main>
                <section>
                    <div>
                        <h1>Archives: Service</h1>
                        {services.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                </section>
                <Aside />
            </main>
            <Footer />
        </div>
    );
}
