import React from "react";
export default function SearchRegionTemplate(props) {

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
        price,
        goToVillaBookPage,
        goToVillaDetailsPage
    } = props;

    return (
        <article className="villa-search">
            <img src={src} alt={alt} />
            <section>
                <h2>{title}</h2>
                <p>{description}</p>
            </section>
            <section>
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

                <div className="link">
                    <button className="btn" onClick={() => goToVillaBookPage(props.title)}>BOOK</button>
                    <button className="btn" onClick={() => goToVillaDetailsPage(props.title)}>View Details</button>
                </div>
            </section>
        </article>
    )
}
