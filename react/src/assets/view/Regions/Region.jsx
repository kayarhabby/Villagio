import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import RegionTemplate from "./RegionTemplate.jsx";
import Navbar from "../../components/Navbar.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/Footer.jsx";
import {useTranslation} from "react-i18next";

export default function Region() {
    const { t } = useTranslation('villa');
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
                        const villaKey = villa.Titre.replace(/\s+/g, '').toLowerCase();
                        const villaData = {
                            title: t(`${villaKey}.title`),
                            desc: t(`${villaKey}.desc`),
                            adults: t(`${villaKey}.adults`, { number: villa.Adultes }),
                            children: t(`${villaKey}.children`, { number: villa.Enfants }),
                            amenities: t(`${villaKey}.amenities`, { amenities: villa.Equipements }),
                            size: t(`${villaKey}.size`, { size: villa.Superficie }),
                            category: t(`${villaKey}.category`, { category: villa.lieu }),
                            price: t(`${villaKey}.price`, { price: villa.Prix })
                        };
                        return (
                            <RegionTemplate
                                key={villa.id_villa}
                                src={src}
                                alt={villaData.title}
                                description={villaData.desc}
                                title={villaData.title}
                                nbAdult={villaData.adults}
                                nbChildren={villaData.children}
                                amenities={villaData.amenities}
                                size={villaData.size}
                                categories={villaData.category}
                                price={villaData.price}
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
