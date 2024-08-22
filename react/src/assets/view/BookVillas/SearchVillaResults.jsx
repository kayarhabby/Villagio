import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importez useNavigate
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import SearchRegionTemplate from "./SearchRegionTemplate.jsx";

export default function SearchVillaResults() {
    const [villas, setVillas] = useState([]);
    const navigate = useNavigate(); // Utilisez useNavigate pour la redirection

    useEffect(() => {
        // Récupérer les résultats de recherche depuis localStorage
        const searchResults = localStorage.getItem('searchResults');
        if (searchResults) {
            setVillas(JSON.parse(searchResults));
            // Nettoyer localStorage après avoir récupéré les résultats
            localStorage.removeItem('searchResults');
        }
    }, []);

    const goToVillaBookPage = (name) => {
        navigate(`/villa/book/${encodeURIComponent(name)}`);
    };

    const goToVillaDetailsPage = (name) => {
        navigate(`/villa/details/${encodeURIComponent(name)}`);
    };

    return (
        <div className="home">
            <Navbar />
            <main>
                <article className="villa-search-title">
                    <h1>Search Results</h1>
                    <p>{villas.length} accommodations found</p>
                </article>

                {villas.map((villa) => {
                    const imgPathParts = villa.Image.split('/');
                    const imgFileName = imgPathParts[imgPathParts.length - 1];
                    const src = `/src/assets/images/${imgFileName}`;

                    return (
                        <SearchRegionTemplate
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
            </main>
            <Footer />
        </div>
    );
}
