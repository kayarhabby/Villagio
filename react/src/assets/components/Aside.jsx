import FormHome from "./FormHome.jsx";
import Lemarche from '/src/assets/images/Le_marche_Etna_House.jpg';
import FooterLinks from "./FooterLinks.jsx";

export default function () {
    const recentComments = [
        { text: 'Unforgettable Vignanello garden tour in Lazio', href: '#' },
        { text: 'Special discounts for Italian castles tour!', href: '#' },
        { text: 'Places of interest near summer villa Emilia', href: '#' },
        { text: 'Celebrate Lucca Summer Festival with us', href: '#' },
        { text: 'Lazio or Campania: which location is best for your stay?', href: '#' },
    ];
    return (
        <aside>
            <FormHome/>
            <section>
                <h2>Région</h2>
                <div className="regionbtn">
                    <button>Aosta Valley</button>
                    <button>Lazio</button>
                    <button>Le Marche</button>
                </div>
            </section>

            <section>
                <h2>WE RECOMMEND</h2>
                <img src={Lemarche} alt=""/>
                <h4>Summer VIlla Emilia</h4>
                <p> Prices start at: $561 for 3 nights (+taxes and fees)</p>
                <button className="btn">BOOK</button>
            </section>

            <section>
                <FooterLinks title="RECENT COMMENTS" links={recentComments} />
            </section>

            <section>
                <h3>Search</h3>
                <div className="search-container">
                    <form action="">
                        <input type="text" placeholder="Search.." name="search"/>
                        {/*<button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>*/}
                    </form>
                </div>
            </section>
        </aside>
    )
}
