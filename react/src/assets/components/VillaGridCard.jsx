import Card from "./Card.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

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

    const navigate = useNavigate();

    const goToVillaBookPage = (name) => {
        navigate(`/villa/book/${encodeURIComponent(name)}`);
    };

    const goToVillaDetailsPage = (name) => {
        navigate(`/villa/details/${encodeURIComponent(name)}`);
    };
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
                        goToVillaBookPage={goToVillaBookPage}
                        goToVillaDetailsPage={goToVillaDetailsPage}
                    />
                );
            })}
        </section>
    )
}
