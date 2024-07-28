import SearchForm from "./SearchForm.jsx";
import FooterLinks from "./FooterLinks.jsx";
import RegionButtons from "./RegionButtons.jsx";
import RecommendSection from "./RecommendSection.jsx";

export default function () {
    const recentComments = [
        { text: 'Unforgettable Vignanello garden tour in Lazio', href: '#' },
        { text: 'Special discounts for Italian castles tour!', href: '#' },
        { text: 'Places of interest near summer villa Emilia', href: '#' },
        { text: 'Celebrate Lucca Summer Festival with us', href: '#' },
        { text: 'Lazio or Campania: which location is best for your stay?', href: '#' },
    ];

    const regionButtonsData = {
        title: "Région",
        regions: ["Aosta Valley", "Lazio", "Le Marche"]
    };

    const recommendSectionData = {
        title: "WE RECOMMEND",
        imageSrc: "/src/assets/images/Cottage_Monte_Bianco.jpg",
        altText: "Cottage Monte Bianco",
        villaName: "Summer Villa Emilia",
        price: "$561",
        buttonText: "BOOK"
    };

    return (
        <aside>
            <RegionButtons {...regionButtonsData} />
            <RecommendSection {...recommendSectionData} />
            <section>
                <FooterLinks title="RECENT COMMENTS" links={recentComments} />
            </section>
        </aside>
    )
}
