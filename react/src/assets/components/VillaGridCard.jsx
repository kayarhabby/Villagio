import Card from "./Card.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function VillaGridCard() {

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
    )
}