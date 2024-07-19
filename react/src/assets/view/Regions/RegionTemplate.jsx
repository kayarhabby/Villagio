import React from "react";
import '../../css/template.css'
import '../../css/RegionTemplate.css'
export default function RegionTemplate(props) {

    const {
        src,
        alt,
        description,
        title,
        nbAdult,
        nbChildren,
        amenities,
        size,
        bedType,
        categories,
        price
    } = props;

    return (
        <article>
            <h1>{title}</h1>
            <img src={src} alt={alt}/>
            <section>
                <h2>{title}</h2>
                <p>{description}</p>
            </section>
            <section>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Adults : </span> {nbAdult}
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Children : </span> {nbChildren}
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Amenities :</span> {amenities}
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Size : </span> {size}
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Bed Type : </span> {bedType}
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Categories : </span> {categories}
                    </p>
                </div>
                <div className="description">
                    <p>
                        <span className="title-desc-color">Prices start at : </span> {price} for 3 nights (+taxes and fees)
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
