import ServiceCard from "../components/ServiceCard.jsx";
import FormHome from "../components/HOME/FormHome.jsx";
import Header from "../components/HOME/Header.jsx";
import Footer from "../components/HOME/Footer.jsx";
import Navbar from "../components/HOME/Navbar.jsx";

export default function Service() {
    return (
        <div id="service">
            <Navbar />
            <main>
                <ServiceCard />
                <aside>
                    <FormHome />
                    <section>
                        <h3>Région</h3>
                        <div>
                            <button>Aosta Valley</button>
                            <button>Lazio</button>
                            <button>Le Marche</button>
                        </div>
                    </section>

                    <section>
                        <h3>WE RECOMMEND</h3>
                        <img src="" alt=""/>
                        <h4>Summer VIlla Emilia</h4>
                        <p> Prices start at: $561 for 3 nights (+taxes and fees)</p>
                        <button>BOOK</button>
                    </section>
                </aside>
            </main>
            <Footer />
        </div>
    )
}
