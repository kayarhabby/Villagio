import RegionTemplate from "./RegionTemplate.jsx";
import Navbar from "../../components/HOME/Navbar.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/HOME/Footer.jsx";
import React, {useEffect, useState} from "react";

export default function () {

    const villas = {};

    return (
        <div className="template">
            <Navbar/>
            <main>
                <section>
                    {villas.map((villa) => (
                        <RegionTemplate key={villa.id} {...villa}/>
                    ))}
                </section>
                <Aside/>
            </main>
            <Footer/>
        </div>
    )
}
