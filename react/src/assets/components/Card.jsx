// Card component to display individual villa details
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
        price,
        goToVillaBookPage,
        goToVillaDetailsPage
    } = props;

    return (
        <article>
            <a href="#" onClick={(event) => goToVillaDetailsPage(event, title)}><img src={src} alt={alt}/> </a>{/* Villa image*/}
                <h2>{title}</h2>  {/*Villa title */}
                <p className="desc-item-p">{description}</p>  {/*Villa description */}
                <section className="description-item-acs">
                <span>
                    Adults : {nbAdult} / Children : {nbChildren} / Size : {size} / Amenities : {amenities} / Categories : {categories}.
                </span> {/* Villa details */}
                </section>
                <div className="price-item-acs">
                    <span>Prices start at : </span> <strong>{price}</strong> for 3 nights (+taxes and fees)
                </div>
                <div>
                    <button className="btn" onClick={() => goToVillaBookPage(title)}>BOOK</button>
                    {/* Booking button */}
                    <a href="#" onClick={(event) => goToVillaDetailsPage(event, title)}>View
                        Details</a> {/* Details link */}
                </div>
        </article>
);
}
