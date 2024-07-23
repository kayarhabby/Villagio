import Navbar from "../../components/Navbar.jsx";
import RegionTemplate from "./RegionTemplate.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/Footer.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Lazio() {
    const [villas, setVillas] = useState([]);
    useEffect(() => {
        const fetchVillas = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/lieu/2/villa`);
            setVillas(response.data.data);
        }
        fetchVillas();
    }, []);

    const navigate = useNavigate();

    const goToVillaBookPage = (name) => {
        navigate(`/villa/book/${encodeURIComponent(name)}`);
    };

    return (
        <div className="template">
            <Navbar/>
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
                                goToVillaBookPage = {goToVillaBookPage}
                            />
                        );
                    })}
                </section>
                <Aside/>
            </main>
            <Footer/>
        </div>
    )
}
