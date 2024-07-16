import Lemarche from '/src/assets/images/Le_marche_Etna_House.jpg';
export default function Card() {
    return (
        <article>
            <img src={Lemarche} alt=""/>
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
                <button className="btn">BOOK</button>
                <a href="">View Details</a>
            </div>
        </article>
    )
}
