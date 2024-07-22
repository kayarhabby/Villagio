// TestimonialPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar.jsx";
import ImageCard from "../Activities/ImageDisplay.jsx";
import TextTestimonial from "./TextTestimonial.jsx";
import NavigationTestimonial from "./NavigationTestimonial.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/Footer.jsx";

const guests = [
    {
        id: 1,
        src: "/src/assets/images/joeDoe.jpg",
        alt: "JOE DOE",
        comments: "I was in Italy for the first time and stayed by chance in a winder cottage Monte Bianco. I must say that was an unforgettable experience!",
        name : "JOE DOE",
        link: "/testimonial"
    },
    {
        id: 2,
        src: "/src/assets/images/kimLee.jpg",
        alt: "KIM LEE",
        comments: "I’ll never forget our summer stay at villa Emilia! Perfect location, perfect service, amazing nature views. I enjoyed the stay and would recommend it to everyone. Moreover, there are a lot of interesting things to visit and do – fests, food tours, castles tours and much more!",
        name : "KIM LEE",
        link: "/testimonial"
    },
    {
        id: 3,
        src: "/src/assets/images/tomHendrix.jpg",
        alt: "John Doe",
        comments: "I was visiting Le Marche with my family and friends and stayed at  Etna House – this was an amazing and unforgettable stay! A lot of space, a pool, a beachfront, just a peaceful rest.",
        name : "TOM HENDRIX",
        link: "/testimonial"
    }
];

function TestimonialPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const currentPage = parseInt(id, 10);

    const nextPage = () => {
        navigate(`/testimonial/${currentPage < guests.length - 1 ? currentPage + 1 : currentPage}`);
    };

    const prevPage = () => {
        navigate(`/testimonial/${currentPage > 0 ? currentPage - 1 : currentPage}`);
    };

    return (
        <div className="template">
            <Navbar/>
            <ImageCard src={guests[currentPage].src} title={guests[currentPage].name}
                       alt={guests[currentPage].alt}/>
            <main>
                <section>
                    <TextTestimonial text={guests[currentPage].comments}/>
                    <NavigationTestimonial
                        currentPage={currentPage}
                        totalPages={guests.length}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        pages={guests}
                    />
                </section>
                <Aside/>
            </main>
            <Footer/>
        </div>
    );
}

export default TestimonialPage;
