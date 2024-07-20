export default function ImageCard({ src, title, alt }) {
    return (
        <div className="image-card">
            <img src={src} alt={alt} className="image" />
            <div className="title">{title}</div>
        </div>
    );
}
