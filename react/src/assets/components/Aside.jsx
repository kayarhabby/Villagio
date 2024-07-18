import FormHome from "./HOME/FormHome.jsx";
import Lemarche from '/src/assets/images/Le_marche_Etna_House.jpg';

export default function () {
    return (
        <aside>
            <FormHome/>
            <section>
                <h3>Région</h3>
                <div className="regionbtn">
                    <button>Aosta Valley</button>
                    <button>Lazio</button>
                    <button>Le Marche</button>
                </div>
            </section>

            <section>
                <h3>WE RECOMMEND</h3>
                <img src={Lemarche} alt=""/>
                <h4>Summer VIlla Emilia</h4>
                <p> Prices start at: $561 for 3 nights (+taxes and fees)</p>
                <button className="btn">BOOK</button>
            </section>

            <section>
                <article className="footer-link">
                    <h3>RECENT COMMENTS</h3>
                    <div>
                        <a href="">Unforgettable Vignanello garden tour in Lazio</a>
                    </div>
                    <div>
                        <a href="">Special discounts for Italian castles tour!</a>
                    </div>
                    <div>
                        <a href="">Places of interest neat summer villa Emilia</a>
                    </div>
                    <div>
                        <a href="">Celebrate Lucca Summer Festival with us</a>
                    </div>
                    <div>
                        <a href="">Lazio or Campania: which location is best for your stay?</a>
                    </div>
                </article>
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
