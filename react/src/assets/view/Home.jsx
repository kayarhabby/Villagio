import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FormHome from "../components/FormHome.jsx";
import Card from "../components/Card.jsx";
import Header from "../components/Header.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import GuestGridCard from "../components/GuestGridCard.jsx";

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
                <GuestGridCard />
            </main>
            <Footer />
        </>
    )
}
