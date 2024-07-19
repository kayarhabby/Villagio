export default function ImageCard({ src, title }) {
    return (
        <div className="image-card">
            <img src={src} alt={title} className="image" />
            <div className="title">{title}</div>
        </div>
    );
}
