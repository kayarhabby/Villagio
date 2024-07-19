import RegionTemplate from "./RegionTemplate.jsx";
import Navbar from "../../components/HOME/Navbar.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/HOME/Footer.jsx";
import React from "react";

export default function () {

    const villas = {};

    return (
        <div className="template">
            <Navbar/>
            <main>
                {villas.map((villa) => (
                    <RegionTemplate key={villa.id} {...villa}/>
                ))}
                <Aside/>
            </main>
            <Footer/>
        </div>
    )
}
