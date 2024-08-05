
function RecommendSection({ title, imageSrc, altText, villaName, price, buttonText }) {
    return (
        <section>
            <h2>{title}</h2>
            <img src={imageSrc} alt={altText} />
            <h4>{villaName}</h4>
            <p>{price}</p>
            <button className="btn">{buttonText}</button>
        </section>
    );
}

export default RecommendSection;
