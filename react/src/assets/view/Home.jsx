export default function Home() {
    return (
        <>
            <header>
                <div>
                    <div className="menu-hamburger">
                        <a href="#"><i className="fa-solid fa-bars"></i></a>
                        <a href="#"><i className="fa-solid fa-x"></i></a>
                    </div>
                    <p>MENU</p>
                </div>

                <a href="/"> Villagio </a>
                <nav>
                    <ul>
                        <li><a href=""> Region</a></li>
                        <li><a href=""> Services</a></li>
                        <li><a href="">Activities</a></li>
                        <li><a href="">News</a></li>
                    </ul>
                </nav>
                <div className="icon-container">
                    <div className="icon-reseaux-social">
                        <p>
                            TRIPADVISOR
                        </p>
                    </div>
                    <div className="icon-reseaux-social">
                        <p className="text-reseaux-social">
                            FOURSQAURE
                        </p>
                    </div>
                    <div className="icon-reseaux-social">
                        <p className="text-reeaux-social">
                            INSTAGRAM
                        </p>
                    </div>
                    <div className="icon-reseaux-social">
                        <p className="text-reseaux-social">
                            FACEBOOK
                        </p>
                    </div>
                    <select className="form-select">
                        <option selected>English</option>
                        <option value="1">Français</option>
                    </select>
                    <select className="form-select">
                        <option selected>Euro</option>
                        <option value="1">USD</option>
                    </select>
                </div>
            </header>

            <main>
                <article>
                    <a href="">
                        Le Marche
                    </a>
                    <h1>Villa Bastilicata Grande</h1>
                    <p>
                        This is a perfect villa with spa center and hot tub for private, family and corporate rest in Le Marche region in Italy, with best nature views.
                    </p>
                    <p>
                        Prices start at: $630 for 3 nights (+taxes and fees)
                    </p>
                    <a href="">
                        <button>BOOK</button>
                    </a>
                </article>
                <h1>
                    The villa rental expert for your vacation
                </h1>
                <p>
                    Villagio offers diverse villas in different regions to help you spend your dream vacation. Book your
                    villa online quickly and safely.
                </p>

                <form action="">
                    <label htmlFor="Check-in"> Check-in : </label>
                    <input type="date" placeholder="Check-in Date"/>

                    <label htmlFor="Check-out"> Check-out : </label>
                    <input type="date" placeholder="Check-out Date"/>

                    <label htmlFor="Adults"> Adults</label>
                    <select className="form-select">
                        <option selected>1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="1">6</option>
                        <option value="1">7</option>
                        <option value="1">8</option>
                        <option value="1">9</option>
                        <option value="1">10</option>
                    </select>
                    <label htmlFor="Adults"> Adults</label>
                    <select className="form-select">
                        <option selected>0</option>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="1">6</option>
                        <option value="1">7</option>
                        <option value="1">8</option>
                        <option value="1">9</option>
                        <option value="1">10</option>
                    </select>

                    <button type="submit"> SEARCH</button>
                </form>

                <section id="cards">
                    <article>
                        <img src="" alt=""/>
                        <h2> Title </h2>
                        <p>
                            Le Marche Etna House is a fully equipped villa with many 3 big rooms, swimming pool, terrace
                            and lots of other facilities.
                        </p>
                        <div>

                        </div>
                        <div>
                            Amenities: Air conditioning, Balcony, Beachfront, Dining area, Flat-screen TV, Free parking,
                            Free WiFi, Outdoor poolView: Swimming pool Bed Type: 1 Queen bad, 4 Tween beds, 1 Full bed
                            Categories: Le Marche
                        </div>
                        <div>
                            Prices start at: $750 for 3 nights (+taxes and fees)
                        </div>
                        <div>
                            <button>BOOK</button>
                            <a href="">View Details</a>
                        </div>
                    </article>

                </section>

                <section>
                    <h2>
                        Guest Reviews
                    </h2>

                    <div className="guest-container">
                        <div className="guest-content">
                            <div>
                                <img src="" alt=""/>
                            </div>
                            <p>
                                I was in Italy for the first time and stayed by chance in a winder cottage Monte Bianco.
                                I must say that was an unforgettable experience!
                            </p>
                            <a href=""> JOE DOE</a>
                        </div>

                        <div className="guest-content">
                            <div>
                                <img src="" alt=""/>
                            </div>
                            <p>
                                I was in Italy for the first time and stayed by chance in a winder cottage Monte Bianco.
                                I must say that was an unforgettable experience!
                            </p>
                            <a href=""> JOE DOE</a>
                        </div>

                        <div className="guest-content">
                            <div>
                                <img src="" alt=""/>
                            </div>
                            <p>
                                I was in Italy for the first time and stayed by chance in a winder cottage Monte Bianco.
                                I must say that was an unforgettable experience!
                            </p>
                            <a href=""> JOE DOE</a>
                        </div>

                    </div>
                </section>
            </main>

            <footer>
                <article>
                <h2>ABOUT US</h2>
                    <p>
                        We are one of the most recognized happy vacation makers in Italy – we provide a wide range of
                        great villas for any occasion since 2015. Any type of a winter or summer villa can be found on
                        the site.
                    </p>
                </article>

                <article>
                    <h2>MULTILINGUAL VILLAGIO</h2>
                    <small>
                        The demo content in German is not a professional translation! It’s sample data used to
                        demonstrate a multilingual website (localization was performed via WPML plugin, which is NOT
                        included into the theme).

                        Note: multi-currency is performed via addon, which is NOT included into the theme.
                    </small>
                </article>

                <article>
                    <h2>RECENT NEWS</h2>
                    <a href="">Unforgettable Vignanello garden tour in Lazio</a>
                    <a href="">Special discounts for Italian castles tour!</a>
                    <a href="">Places of interest neat summer villa Emilia</a>
                    <a href="">Celebrate Lucca Summer Festival with us</a>
                    <a href="">Lazio or Campania: which location is best for your stay?</a>
                </article>

                <article>
                    <h2>Links</h2>
                    <a href="/">How to book</a>
                    <a href="/">General letting conditions</a>
                    <a href="/">JObs and careers</a>
                    <a href="/">Travel agent resources</a>
                    <a href="/">Contact us</a>
                </article>
            </footer>
        </>
    )
}
