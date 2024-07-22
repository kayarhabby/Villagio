import FooterLinks from "./FooterLinks.jsx";

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

    return (
        <footer>
            <div className="footer-text-container">
                <section>
                    <article>
                        <h2>ABOUT US</h2>
                        <p>
                            We are one of the most recognized happy vacation makers in Italy – we provide a wide range
                            of
                            great villas for any occasion since 2015. Any type of a winter or summer villa can be found
                            on
                            the site.
                        </p>
                    </article>

                    <article>
                        <h2>MULTILINGUAL VILLAGIO</h2>
                        <p>
                            The demo content in German is not a professional translation! It’s sample data used to
                            demonstrate a multilingual website (localization was performed via WPML plugin, which is NOT
                            included into the theme).
                        </p>

                        <p>
                            Note: multi-currency is performed via addon, which is NOT included into the theme.
                        </p>

                    </article>
                </section>

                <FooterLinks title="RECENT NEWS" links={recentNews} />
                <FooterLinks title="Links" links={links} />
            </div>

            <div className="footer-bas-page">
                <div>
                    Villagia 2024
                </div>
                <div>
                    +1 (954) 456 6789410 Sunny St, Florida, FL
                </div>

            </div>
        </footer>
    )
}
