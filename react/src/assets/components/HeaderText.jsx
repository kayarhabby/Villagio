import React from "react";

export default function HeaderText(props) {
    const { link, region, title, desc, price, goToVillaBookPage, src, isActive } = props;
    return (
        <div className={`carousel-item ${isActive ? "active" : ""}`}>
            <img src={src} className="d-block w-100" alt={title} />
            <div className="carousel-caption d-none d-md-block">
                <a href={link}>
                    {region}
                </a>
                <h1>{title}</h1>
                <p>{desc}</p>
                <p>{price}</p>
                <button className="btn" onClick={() => goToVillaBookPage(title)}>BOOK</button>
            </div>
        </div>
    );
}
