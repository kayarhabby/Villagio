import Navbar from "../../components/Navbar.jsx";
import RegionTemplate from "./RegionTemplate.jsx";
import Aside from "../../components/Aside.jsx";
import Footer from "../../components/Footer.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "./Pagination.jsx";

export default function AllVillas() {
    const [villas, setVillas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);
    // const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchVillas = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/villa/`);
            // console.log(response.data.data);
            setVillas(response.data.data); // Assuming the API returns an object with a `data` field containing the villas
            // setTotalPages(Math.ceil(response.data.total / villasPerPage)); // Assuming the API returns a `total` field with the total number of villas
        };
        fetchVillas();
    }, [currentPage]);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = villas.slice(firstPostIndex, lastPostIndex);
    console.log(currentPosts);

    return (
        <div className="template home">
            <Navbar/>
            <main>
                <section>
                    {currentPosts.map((villa) => {
                        // Split the image URL
                        const imgPathParts = villa.Image.split('/');
                        const imgFileName = imgPathParts[imgPathParts.length - 1];
                        const src = `/src/assets/images/${imgFileName}`;

                        return (
                            <RegionTemplate
                                key={villa.id_villa}
                                src={src}
                                alt={villa.Titre}
                                description={villa.Description}
                                title={villa.Titre}
                                nbAdult={villa.Adultes}
                                nbChildren={villa.Enfants}
                                amenities={villa.Equipements}
                                size={villa.Superficie}
                                categories={villa.lieu}
                                price={villa.Prix}
                            />
                        );
                    })}
                </section>
                <Aside/>
            </main>
            <Pagination
                totalPosts={villas.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <Footer/>
        </div>
    );
}
