
function RecommendSection({ title, imageSrc, altText, villaName, price, buttonText }) {
    return (
        <section>
            <h2>{title}</h2>
            <img src={imageSrc} alt={altText} />
            <h4>{villaName}</h4>
            <p>Prices start at: {price} for 3 nights (+taxes and fees)</p>
            <button className="btn">{buttonText}</button>
        </section>
    );
}

export default RecommendSection;
