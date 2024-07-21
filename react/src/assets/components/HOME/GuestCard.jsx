export default function GuestCard(props) {
    const {
        src,
        alt,
        comments,
        name,
        link
    } = props;

    return (
        <article className="guest-container">
            <img src={src} alt={alt} className="cercle-img"/>
            <section>
                <p>{comments}</p>
                <a href={link}> {name}</a>
            </section>

        </article>
    )
}
