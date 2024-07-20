import Navbar from "../../components/HOME/Navbar.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/HOME/Footer.jsx";
import React from "react";
import ImageCard from "./ImageDisplay.jsx";
import '../../css/ImageCard.css'

export default function (props) {
    const paragraphs = props.descActivitie.split('\n');
    return (
        <div className="template">
            <Navbar/>
            <ImageCard src={props.source} title={props.title} alt={props.alt} />
            <main>
                <section>
                    <div>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph.trim()}</p>
                        ))}
                    </div>
                </section>
                <Aside/>
            </main>
            <Footer/>
        </div>
    )
}
