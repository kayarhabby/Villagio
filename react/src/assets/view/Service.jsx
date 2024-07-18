import ServiceCard from "../components/ServiceCard.jsx";
import Footer from "../components/HOME/Footer.jsx";
import Navbar from "../components/HOME/Navbar.jsx";
import Aside from "../components/Aside.jsx";

export default function Service() {
    return (
        <div id="service">
            <Navbar />
            <main>
                <section>
                <div>
                    <h1>Archives: Service</h1>
                    <ServiceCard/>
                </div>
                <div>
                    <h1>Archives: Service</h1>
                    <ServiceCard/>
                </div>
                <div>
                    <h1>Archives: Service</h1>
                    <ServiceCard/>
                </div>
                </section>
                <Aside/>
            </main>
            <Footer/>
        </div>
    )
}
