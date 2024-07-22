
function FooterLinks({ title, links }) {
    return (
        <article className="footer-link">
            <h2>{title}</h2>
            {links.map((link, index) => (
                <a href={link.href} key={index}>{link.text}</a>
            ))}
        </article>
    );
}

export default FooterLinks;
