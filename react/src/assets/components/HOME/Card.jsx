import Lemarche from '/src/assets/images/Le_marche_Etna_House.jpg';
import React from "react";
export default function Card(props) {
    const {
        src,
        alt,
        description,
        title,
        nbAdult,
        nbChildren,
        amenities,
        size,
        categories,
        price
    } = props;

    return (
        <article>
            <img src={src} alt={alt}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="description-item-acs">
                <li>
                    <span>Adults : </span> {nbAdult}
                </li>
                <li>
                    <span>Children : </span> {nbChildren}
                </li>
                <li>
                    <span>Size : </span> {size}
                </li>
            </ul>
            <ul className="description-item-ac">
                <li>
                    <span>Amenities :</span> {amenities}
                </li>
                <li>
                    <span>Categories : </span> {categories}
                </li>
            </ul>
            <div>
                <span>Prices start at : </span> {price} for 3 nights (+taxes
                and fees
            </div>
            <div>
                <button className="btn">BOOK</button>
                <a href="">View Details</a>
            </div>
        </article>
    )
}
