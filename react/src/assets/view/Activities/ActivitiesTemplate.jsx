import Navbar from "../../components/HOME/Navbar.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/HOME/Footer.jsx";
import React from "react";
import Header from "../../components/HOME/Header.jsx";

export default function (props) {
    const paragraphs = props.descActivitie.split('\n');
    return (
        <div id="service">
            <Navbar/>
            <Header />
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
