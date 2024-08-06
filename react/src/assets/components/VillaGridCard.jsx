import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function VillaGridCard() {
    const { t } = useTranslation('villa');
    const [villas, setVillas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
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

    const goToVillaBookPage = (name) => {
        navigate(`/villa/book/${encodeURIComponent(name)}`);
    };

    const goToVillaDetailsPage = (event, name) => {
        event.preventDefault();
        navigate(`/villa/details/${encodeURIComponent(name)}`);
    };

    return (
        <section id="cards">
            {villas.map((villa) => {
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
                    <Card
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
                        goToVillaBookPage={() => goToVillaBookPage(villa.Titre)}
                        goToVillaDetailsPage={(e) => goToVillaDetailsPage(e, villa.Titre)}
                    />
                );
            })}
        </section>
    );
}
