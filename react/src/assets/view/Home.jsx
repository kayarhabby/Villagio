import Navbar from "../components/HOME/Navbar.jsx";
import Footer from "../components/HOME/Footer.jsx";
import FormHome from "../components/HOME/FormHome.jsx";
import Card from "../components/HOME/Card.jsx";
import GuestCard from "../components/HOME/GuestCard.jsx";
import Header from "../components/HOME/Header.jsx";

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Header />
                <h1>
                    The villa rental expert for your vacation
                </h1>
                <p>
                    Villagio offers diverse villas in different regions to help you spend your dream vacation. Book your
                    villa online quickly and safely.
                </p>
                <FormHome />
                <section id="cards">
                    <Card />
                    <Card />
                    <Card />
                </section>
                <section>
                    <h2>
                        Guest Reviews
                    </h2>

                    <div className="guest-container">
                        <GuestCard />
                        <GuestCard />
                        <GuestCard />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
