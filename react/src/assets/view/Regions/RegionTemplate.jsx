import React from "react";
import '../../css/template.css'
import '../../css/RegionTemplate.css'
export default function RegionTemplate() {
    return (
        <article>
            <h1>Aosta Valley</h1>
            <img src="src/assets/images/LeMarche.jpg" alt=""/>
            <section>
                <h2>Summer Villa Emilia</h2>
                <p>Summer Villa Emilia is a perfect place for
                    luxury rest, traveling and tasting the best
                    regional cuisine in Italy, with a feel of
                    Renaissance.</p>
            </section>
            <section>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Adults : </span> 5
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Children : </span> 2
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Amenities :</span> Air conditioning, Balcony, Beachfront, Dining area, Flat-screen TV, Free parking, Free WiFi, Outdoor pool, Pet friendly, Terrace
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Size : </span> 160m²
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Bed Type : </span> 2 Full beds, 2 Queen beds, 2 Tween beds
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Categories : </span> Aosta Valley
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Prices start at : </span> $561 for 3 nights (+taxes and fees)
                    </p>
                </div>
                <div className="link">
                    <button className="btn">
                        BOOK
                    </button>
                    <a href="">View Details</a>
                </div>
            </section>
        </article>
    )
}
