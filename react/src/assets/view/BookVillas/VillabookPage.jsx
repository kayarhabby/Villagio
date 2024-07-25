// TestimonialPage.jsx
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Navbar from "../../components/Navbar.jsx";
import ImageCard from "../Activities/ImageDisplay.jsx";
import Footer from "../../components/Footer.jsx";
import axios from "axios";
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
    const currentPage = villas.findIndex(villa => villa.Titre === decodeURIComponent(name));

    if (currentPage === -1) {
        return <div>Témoignage non trouvé</div>;
    }


    const imgPathParts = villas[currentPage].Image.split('/');
    const imgFileName = imgPathParts[imgPathParts.length - 1];
    const src = `/src/assets/images/${imgFileName}`;

    return (
        <div className="template home">
            <Navbar/>
            <ImageCard src={src} title={villas[currentPage].Titre}
                       alt={villas[currentPage].Titre}/>

            <main>
                <section className="fyv-container">
                    <p>
                        Booking your dream villa with Villagio company is really fast and safe. Just set check-in and check-out dates, provide details for reservation and pay online! Your perfect vacation is several clicks away!
                    </p>
                    <ReservationForm />
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default VillabookPage;


