import { useState } from 'react';
import axios from 'axios';
import "../../css/Formulaire_inscription_connexion.css"; // Importation du fichier CSS pour le style

export default function ConnexionForm() {
    // Déclaration de l'état initial pour les données du formulaire
    const [formData, setFormData] = useState({
        Email: '',
        Password: '' // Champ "Mot de passe"
    });

    // État pour gérer l'affichage du mot de passe
    const [showPassword, setShowPassword] = useState(false);

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // Mise à jour de l'état avec les nouvelles valeurs des champs
    };

    // Fonction de gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du formulaire

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/connexion", formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true // Pour envoyer les cookies, nécessaire pour Sanctum
            });

            const data = response.data;

            if (data.success) {
                console.log("Formulaire envoyé !");
                clearForm(); // Réinitialisation du formulaire
            } else {
                alert(data.msg); // Affichage d'un message d'erreur en cas d'échec
            }
        } catch (error) {
            console.error("Une erreur est survenue:", error.response?.data || error.message);
            alert("Une erreur est survenue..."); // Affichage d'un message d'erreur en cas de problème avec la requête
        }
    };

    // Fonction pour réinitialiser le formulaire
    const clearForm = () => {
        setFormData({
            Email: '',
            Password: '' // Réinitialisation du champ "Mot de passe"
        });
    };

    return (
        <section id="form">
            <div className="form_container">
                <h2>Connexion</h2>
                <form id="formulaire" onSubmit={handleSubmit}>
                    {/* Champ de saisie pour l'email */}
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

                    {/* Champ de saisie pour le mot de passe */}
                    <div className="form-control">
                        <label htmlFor="Password">Password</label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type={showPassword ? 'text' : 'password'} // Permet de basculer entre type 'text' et 'password'
                                id="Password"
                                name="Password"
                                value={formData.Password}
                                onChange={handleChange}
                                style={{ flexGrow: 1 }}
                            />
                            {/* Bouton pour afficher/masquer le mot de passe */}
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

                    {/* Bouton de soumission */}
                    <button type="submit"><span>Connexion</span></button>
                </form>
            </div>
        </section>
    );
}
