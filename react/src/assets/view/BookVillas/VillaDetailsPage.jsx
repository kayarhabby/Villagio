// TestimonialPage.jsx
import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Navbar from "../../components/Navbar.jsx";
import ImageCard from "../Activities/ImageDisplay.jsx";
import TextTestimonial from "../Testimoniale/TextTestimonial.jsx";
import Navigation from "../Testimoniale/Navigation.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/Footer.jsx";
import axios from "axios";
import DetailsVilla from "./DetailsVilla.jsx";
import ReservationForm from "./ReservationForm.jsx";

function VillabookPage() {
    const [villas, setVillas] = useState([]);

    const fetchVillas = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/villa/`);
            setVillas(response.data.data);
        } catch (error) {
            console.error('Error fetching villas:', error);
        }
    };
    useEffect(() => {
        fetchVillas();
    }, []);

    const { name } = useParams();
    const navigate = useNavigate();
    const currentPage = villas.findIndex(villa => villa.Titre === decodeURIComponent(name));

    if (currentPage === -1) {
        return <div>Témoignage non trouvé</div>;
    }

    const nextPage = () => {
        const nextIndex = currentPage < villas.length - 1 ? currentPage + 1 : currentPage;
        navigate(`/villa/book/${encodeURIComponent(villas[nextIndex].Titre)}`);
    };

    const prevPage = () => {
        const prevIndex = currentPage > 0 ? currentPage - 1 : currentPage;
        navigate(`/villa/book/${encodeURIComponent(villas[prevIndex].Titre)}`);
    };

    const imgPathParts = villas[currentPage].Image.split('/');
    const imgFileName = imgPathParts[imgPathParts.length - 1];
    const src = `/src/assets/images/${imgFileName}`;

    return (
        <div className="template">
            <Navbar/>
            <ImageCard src={src} title={villas[currentPage].Titre}
                       alt={villas[currentPage].Titre}/>

            <main>
                <section>
                    <TextTestimonial text={villas[currentPage].Description}/>
                    <DetailsVilla
                        key={villas[currentPage].id_villa}
                        nbAdult={villas[currentPage].Adultes}
                        nbChildren={villas[currentPage].Enfants}
                        amenities={villas[currentPage].Equipements}
                        size={villas[currentPage].Superficie}
                        categories={villas[currentPage].lieu}
                        price={villas[currentPage].Prix}
                    />
                    <ReservationForm />
                    <Navigation
                        currentPage={currentPage}
                        totalPages={villas.length}
                        nextPage={nextPage}
                        prevPage={prevPage}
                    />
                </section>
                <Aside />
            </main>
            <Footer/>
        </div>
    );
}

export default VillabookPage;


