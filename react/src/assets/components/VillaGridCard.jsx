import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function VillaGridCard() {
    // State to hold the list of villas
    const [villas, setVillas] = useState([]);

    // Fetch the villas when the component mounts
    useEffect(() => {
        const fetchVillas = async () => {
            try {
                // Make an API call to get the list of villas
                const response = await axios.get(`http://127.0.0.1:8000/api/villa/`);
                // Set the villas data in state
                setVillas(response.data.data);
            } catch (error) {
                console.error('Error fetching villas:', error);
            }
        };

        fetchVillas();
    }, []);

    // Initialize navigate function from react-router-dom
    const navigate = useNavigate();

    // Function to navigate to the villa booking page
    const goToVillaBookPage = (name) => {
        navigate(`/villa/book/${encodeURIComponent(name)}`);
    };

    // Function to navigate to the villa details page
    // Prevents the default link behavior
    const goToVillaDetailsPage = (event, name) => {
        event.preventDefault();
        navigate(`/villa/details/${encodeURIComponent(name)}`);
    };

    return (
        <section id="cards">
            {villas.map((villa) => {
                // Process the image path
                const imgPathParts = villa.Image.split('/');
                const imgFileName = imgPathParts[imgPathParts.length - 1];
                const src = `/src/assets/images/${imgFileName}`;

                return (
                    <Card
                        key={villa.id_villa}  // Unique key for each villa
                        src={src}  // Image source
                        alt={villa.Titre}  // Image alt text
                        description={villa.Description}  // Villa description
                        title={villa.Titre}  // Villa title
                        nbAdult={villa.Adultes}  // Number of adults
                        nbChildren={villa.Enfants}  // Number of children
                        amenities={villa.Equipements}  // Amenities
                        size={villa.Superficie}  // Size of the villa
                        categories={villa.lieu}  // Categories or location
                        price={villa.Prix}  // Price
                        goToVillaBookPage={goToVillaBookPage}  // Booking page navigation function
                        goToVillaDetailsPage={goToVillaDetailsPage}  // Details page navigation function
                    />
                );
            })}
        </section>
    );
}
