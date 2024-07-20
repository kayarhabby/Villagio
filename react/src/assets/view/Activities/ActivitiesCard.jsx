import React from "react";

export default function ActivitiesCard(props) {
    const {
        src,
        alt,
        title,
        desc,
        linkActivitie
    } = props;
    const paragraphs = desc.split('\n')
    return (
        <article>
            <img src={src} alt={alt}/>
            <h2>{title}</h2>
            <div>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                ))}
            </div>
            <a href={linkActivitie}>Read More</a>
        </article>
    )
}
