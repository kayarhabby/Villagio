import { useState} from 'react';
import axios from 'axios';
import "../../css/Formulaire_inscription_connexion.css"; // Importation du fichier CSS pour le style

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        PhoneNumber: '',
        Email: '',
        Password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/inscription", formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true // Pour envoyer les cookies, nécessaire pour Sanctum
            });

            const data = response.data;

            if (data.success) {
                console.log("Formulaire envoyé !");
                clearForm();
            } else {
                alert(data.msg);
            }
        } catch (error) {
            console.error("Une erreur est survenue:", error.response?.data || error.message);
            alert("Une erreur est survenue...");
        }
    };
//123456789123
    const clearForm = () => {
        setFormData({
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            Email: '',
            Password: ''
        });
    };

    return (
        <section id="form">
            <div className="form_container">
                <h2>Inscription</h2>
                <form id="formulaire" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="FirstName">First Name</label>
                        <input
                            type="text"
                            id="FirstName"
                            name="FirstName"
                            value={formData.FirstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="LastName">Last Name</label>
                        <input
                            type="text"
                            id="LastName"
                            name="LastName"
                            value={formData.LastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="PhoneNumber">Phone Number</label>
                        <input
                            type="text"
                            id="PhoneNumber"
                            name="PhoneNumber"
                            value={formData.PhoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="Email">Email</label>
                        <input
                            type="email"
                            id="Email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="Password">Password</label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="Password"
                                name="Password"
                                value={formData.Password}
                                onChange={handleChange}
                                style={{ flexGrow: 1 }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    marginLeft: '8px',
                                    padding: '0.5em',
                                    cursor: 'pointer',
                                }}
                            >
                                {showPassword ? 'Masquer' : 'Afficher'}
                            </button>
                        </div>
                    </div>

                    <button type="submit"><span>Inscription</span></button>
                </form>
            </div>
        </section>
    );
}
