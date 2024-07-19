import RegionTemplate from "./RegionTemplate.jsx";
import Navbar from "../../components/HOME/Navbar.jsx";
import ServiceCard from "../../components/ServiceCard.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/HOME/Footer.jsx";
import React from "react";

export default function () {
    return (
        <div className="template">
            <Navbar/>
            <main>
                <section>
                    <RegionTemplate/>
                </section>
                <Aside/>
            </main>
            <Footer/>
        </div>
    )
}
