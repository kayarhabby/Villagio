import React from "react";
import '../../css/template.css'
import '../../css/RegionTemplate.css'
export default function DetailsVilla(props) {

    const {
        nbAdult,
        nbChildren,
        amenities,
        size,
        categories,
        price
    } = props;

    return (
        <article>
            <h2>Details</h2>

            <ul className="description">
                <li>
                    <span className="title-desc-color">Adults : </span> {nbAdult}
                </li>
                <li>
                    <span className="title-desc-color">Children : </span> {nbChildren}
                </li>
                <li>
                    <span className="title-desc-color">Amenities :</span> {amenities}
                </li>
                <li>
                    <span className="title-desc-color">Size : </span> {size}
                </li>
                <li>
                    <span className="title-desc-color">Categories : </span> {categories}
                </li>
                <li>
                    <span className="title-desc-color">Prices start at : </span> {price} for 3 nights (+taxes
                    and fees)
                </li>
            </ul>
        </article>
    )
}
