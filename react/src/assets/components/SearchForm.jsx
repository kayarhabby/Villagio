import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
    const [formData, setFormData] = useState({
        CheckIn: '',
        CheckOut: '',
        Adults: '1',
        Children: '0',
        Region: '0', // Valeur par défaut correspondant à "All Villas"
    });

    const navigate = useNavigate(); // Utilisez useNavigate pour la redirection

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/villa/search", formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true // Pour envoyer les cookies, nécessaire pour Sanctum
            });

            const data = response.data;

            if (data.success) {
                // Stocker les résultats dans localStorage
                localStorage.setItem('searchResults', JSON.stringify(data.data));
                clearForm();
                navigate('/search'); // Redirigez vers la page des résultats de recherche
            } else {
                alert(data.msg);
            }
        } catch (error) {
            console.error("Une erreur est survenue:", error.response?.data || error.message);
            alert("Une erreur est survenue...");
        }
    };

    const clearForm = () => {
        setFormData({
            CheckIn: '',
            CheckOut: '',
            Adults: '1',
            Children: '0',
            Region: '0', // Valeur par défaut pour "All Villas"
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <section>
                <div>
                    <label htmlFor="CheckIn">Check-in :</label>
                    <input
                        type="date"
                        placeholder="Check-in Date"
                        id="CheckIn"
                        name="CheckIn"
                        value={formData.CheckIn}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="CheckOut">Check-out :</label>
                    <input
                        type="date"
                        placeholder="Check-out Date"
                        id="CheckOut"
                        name="CheckOut"
                        value={formData.CheckOut}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Adults">Adults</label>
                    <select
                        className="form-select"
                        id="Adults"
                        name="Adults"
                        value={formData.Adults}
                        onChange={handleChange}
                    >
                        {[...Array(10).keys()].map(n => (
                            <option key={n} value={n + 1}>{n + 1}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="Children">Children</label>
                    <select
                        className="form-select"
                        id="Children"
                        name="Children"
                        value={formData.Children}
                        onChange={handleChange}
                    >
                        {[...Array(11).keys()].map(n => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="Region">Region</label>
                    <select
                        className="form-select"
                        id="Region"
                        name="Region"
                        value={formData.Region}
                        onChange={handleChange}
                    >
                        <option value="0">All Villas</option>
                        <option value="1">Aosta Valley</option>
                        <option value="2">Lazio</option>
                        <option value="3">Le Marche</option>
                    </select>
                </div>
            </section>
            <button type="submit" className="btn">SEARCH</button>
        </form>
    );
}
