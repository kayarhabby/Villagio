// TestimonialPage.jsx
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Navbar from "../../components/Navbar.jsx";
import ImageCard from "../Activities/ImageDisplay.jsx";
import Footer from "../../components/Footer.jsx";
import axios from "axios";
import ReservationForm from "./ReservationForm.jsx";
import Aside from "../../components/Aside.jsx";

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

    return (
        <div className="template home">
            <Navbar/>
            <main>
                <section>
                    <ReservationForm />
                </section>
                <Aside />
            </main>
            <Footer/>
        </div>
    );
}

export default VillabookPage;


