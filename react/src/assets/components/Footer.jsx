import FooterLinks from "./FooterLinks.jsx";
import VillagioText from "./VillagioText.jsx";

export default function Footer() {
    const recentNews = [
        { text: 'Unforgettable Vignanello garden tour in Lazio', href: '#' },
        { text: 'Special discounts for Italian castles tour!', href: '#' },
        { text: 'Places of interest near summer villa Emilia', href: '#' },
        { text: 'Celebrate Lucca Summer Festival with us', href: '#' },
        { text: 'Lazio or Campania: which location is best for your stay?', href: '#' },
    ];

    const links = [
        { text: 'How to book', href: '#' },
        { text: 'General letting conditions', href: '#' },
        { text: 'Jobs and careers', href: '#' },
        { text: 'Travel agent resources', href: '#' },
        { text: 'Contact us', href: '#' },
    ];

    const aboutUsData = {
        title: "ABOUT US",
        descriptions: "We are one of the most recognized happy vacation makers in Italy – we provide a wide range of great villas for any occasion since 2015. Any type of a winter or summer villa can be found on the site."
    };

    const multilingualVillagioData = {
        title: "MULTILINGUAL VILLAGIO",
        descriptions: "The demo content in German is not a professional translation! It’s sample data used to demonstrate a multilingual website (localization was performed via WPML plugin, which is NOT included into the theme). " +
            "\n" +
            "Note: multi-currency is performed via addon, which is NOT included into the theme."
    };

    return (
        <footer>
            <section className="footer-text-container">
                <section>
                    <VillagioText {...aboutUsData} />
                    <VillagioText {...multilingualVillagioData} />
                </section>

                <FooterLinks title="RECENT NEWS" links={recentNews}/>
                <FooterLinks title="Links" links={links}/>
            </section>

            <section className="footer-bas-page">
                <div>
                    Villagia 2024
                </div>
                <div>
                    +1 (954) 456 6789410 Sunny St, Florida, FL
                </div>

            </section>
        </footer>
    )
}
