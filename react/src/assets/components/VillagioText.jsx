
function VillagioText({ title, descriptions }) {
    const paragraphs = descriptions.split('\n');
    return (
        <article>
            <h2>{title}</h2>
            {paragraphs.map((desc, index) => (
                <p key={index}>{desc}</p>
            ))}
        </article>
    );
}

export default VillagioText;
