import React from "react";
import '../../css/template.css'
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
        categories,
        price,
        goToVillaBookPage,
        goToVillaDetailsPage
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
                <ul className="description">
                    <li>
                        {nbAdult}
                    </li>
                    <li>
                        {nbChildren}
                    </li>
                    <li>
                         {amenities}
                    </li>
                    <li>
                         {size}
                    </li>
                    <li>
                         {categories}
                    </li>
                    <li>
                         {price}
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
