
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
            <img src={src} alt={alt}/>
            <h2>{title}</h2>
            <p className="desc-item-p">{description}</p>
            <section className="description-item-acs">
                <span>
                    Adults : {nbAdult} / Children : {nbChildren} / Size : {size} / Amenities : {amenities} / Categories : {categories}.
                </span>
            </section>
            <div className="price-item-acs">
                <span>Prices start at : </span> <strong>{price}</strong> for 3 nights (+taxes and fees)
            </div>
            <div>
                <button className="btn" onClick={() => goToVillaBookPage(props.title)}>BOOK</button>
                <button className="btn" onClick={() => goToVillaDetailsPage(props.title)}>View Details</button>
            </div>
        </article>
    )
}
