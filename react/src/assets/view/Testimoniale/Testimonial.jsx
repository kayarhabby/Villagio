// App.js
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";



const guests = [
    {
        id: 1,
        src: "/src/assets/images/joeDoe.jpg",
        alt: "JOE DOE",
        comments: "I was in Italy for the first time and stayed by chance in a winder cottage Monte Bianco. I must say that was an unforgettable experience!",
        name : "JOE DOE"
    },
    {
        id: 2,
        src: "/src/assets/images/kimLee.jpg",
        alt: "KIM LEE",
        comments: "I’ll never forget our summer stay at villa Emilia! Perfect location, perfect service, amazing nature views. I enjoyed the stay and would recommend it to everyone. Moreover, there are a lot of interesting things to visit and do – fests, food tours, castles tours and much more!",
        name : "KIM LEE"
    },
    {
        id: 3,
        src: "/src/assets/images/tomHendrix.jpg",
        alt: "John Doe",
        comments: "I was visiting Le Marche with my family and friends and stayed at  Etna House – this was an amazing and unforgettable stay! A lot of space, a pool, a beachfront, just a peaceful rest.",
        name : "TOM HENDRIX"
    }
];

function Testimonial() {

    const navigate = useNavigate();

    const goToTestimonialPage = (name) => {
        navigate(`/testimonial/${encodeURIComponent(name)}`);
    };

    return (
        <section id="guest">
            <h2>
                Guest Reviews
            </h2>
            <div className="guest-container-card">
                {guests.map((guest) => (
                    <div key={guest.id}>
                        <article className="guest-container">
                            <img src={guest.src} alt={guest.alt} className="cercle-img"/>
                            <section>
                                <p>{guest.comments}</p>
                                <button onClick={() => goToTestimonialPage(guest.name)}>En savoir plus</button>
                            </section>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonial;
