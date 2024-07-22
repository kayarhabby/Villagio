import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FormHome from "../components/FormHome.jsx";
import Card from "../components/Card.jsx";
import GuestCard from "../components/GuestCard.jsx";
import Header from "../components/Header.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {

    const [villas, setVillas] = useState([]);

    useEffect( () => {
        const fetchVillas = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/villa/`);
                setVillas(response.data.data);
            } catch (error) {
                console.error('Error fetching villas:', error);
            }
        };

        fetchVillas();

    }, []);

    const guests = [
        {
            id: 1,
            src: "/src/assets/images/joeDoe.jpg",
            alt: "JOE DOE",
            comments: "I was in Italy for the first time and stayed by chance in a winder cottage Monte Bianco. I must say that was an unforgettable experience!",
            name : "JOE DOE",
            link: "/"
        },
        {
            id: 2,
            src: "/src/assets/images/kimLee.jpg",
            alt: "KIM LEE",
            comments: "I’ll never forget our summer stay at villa Emilia! Perfect location, perfect service, amazing nature views. I enjoyed the stay and would recommend it to everyone. Moreover, there are a lot of interesting things to visit and do – fests, food tours, castles tours and much more!",
            name : "KIM LEE",
            link: "/"
        },
        {
            id: 3,
            src: "/src/assets/images/tomHendrix.jpg",
            alt: "John Doe",
            comments: "I was visiting Le Marche with my family and friends and stayed at  Etna House – this was an amazing and unforgettable stay! A lot of space, a pool, a beachfront, just a peaceful rest.",
            name : "TOM HENDRIX",
            link: "/"
        }
    ];

    return (
        <>
            <Navbar />

            <main>
                <Header />
                <section id="main-header-text-content">
                    <h1>
                        The villa rental expert for your vacation
                    </h1>
                    <p>
                        Villagio offers diverse villas in different regions to help you spend your dream vacation. Book
                        your
                        villa online quickly and safely.
                    </p>
                    <FormHome />
                </section>

                <section id="cards">
                    {villas.map((villa) => {
                        // Split the image URL
                        const imgPathParts = villa.Image.split('/');
                        const imgFileName = imgPathParts[imgPathParts.length - 1];
                        const src = `/src/assets/images/${imgFileName}`;

                        return (
                            <Card
                                key={villa.id_villa}
                                src={src}
                                alt={villa.Titre}
                                description={villa.Description}
                                title={villa.Titre}
                                nbAdult={villa.Adultes}
                                nbChildren={villa.Enfants}
                                amenities={villa.Equipements}
                                size={villa.Superficie}
                                categories={villa.lieu}
                                price={villa.Prix}
                            />
                        );
                    })}
                </section>
                <section id="guest">
                    <h2>
                        Guest Reviews
                    </h2>

                    <div className="guest-container-card">
                        {guests.map((guest) => (
                            <GuestCard key={guest.id} {...guest} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
