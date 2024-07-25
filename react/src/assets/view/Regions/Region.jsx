import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import RegionTemplate from "./RegionTemplate.jsx";
import Navbar from "../../components/Navbar.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/Footer.jsx";

export default function Region() {
    const [villas, setVillas] = useState([]);
    const { regionId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVillas = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/lieu/${regionId}/villa`);
                setVillas(response.data.data);
            } catch (error) {
                console.error('Error fetching villas:', error);
            }
        };
        fetchVillas();
    }, [regionId]);

    const goToVillaBookPage = (name) => {
        navigate(`/villa/book/${encodeURIComponent(name)}`);
    };

    const goToVillaDetailsPage = (name) => {
        navigate(`/villa/details/${encodeURIComponent(name)}`);
    };

    return (
        <div className="template home">
            <Navbar />
            <main>
                <section>
                    {villas.map((villa) => {
                        // Split the image URL
                        const imgPathParts = villa.Image.split('/');
                        const imgFileName = imgPathParts[imgPathParts.length - 1];
                        const src = `/src/assets/images/${imgFileName}`;

                        return (
                            <RegionTemplate
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
                <Aside />
            </main>
            <Footer />
        </div>
    );
}
