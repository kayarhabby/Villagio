
function RegionButtons({ title, regions }) {
    return (
        <section>
            <h2>{title}</h2>
            <div className="regionbtn">
                {regions.map((region, index) => (
                    <button key={index}>{region}</button>
                ))}
            </div>
        </section>
    );
}

export default RegionButtons;
