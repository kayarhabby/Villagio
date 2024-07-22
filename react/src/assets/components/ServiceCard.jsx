
export default function ServiceCard(props) {
    const {
        src,
        alt,
        firstTitle,
        text,
        secondTitle,
        price,
        days,
        accommodation
    } = props;
    const paragraphs = text.split('\n');

    return (
        <article>
            <img src={src} alt={alt} />
            <section>
                <h2>{firstTitle}</h2>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                ))}
            </section>
            <section>
                <h2>{secondTitle}</h2>
                <p>
                    {price} / {days} / {accommodation}
                </p>
            </section>
        </article>
    );
}
