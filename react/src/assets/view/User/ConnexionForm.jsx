import React, { useState } from 'react';
import axios from 'axios';
import "../../css/Formulaire_inscription_connexion.css"; // Import du fichier CSS pour le style du formulaire

export default function ConnexionForm() {
    // Déclaration de l'état initial pour les données du formulaire
    const [formData, setFormData] = useState({
        Email: '',
        Password: '' // Ajout du champ "Mot de passe"
    });

    // Déclaration de l'état pour les erreurs de validation
    const [errors, setErrors] = useState({});

    // État pour gérer l'affichage du mot de passe
    const [showPassword, setShowPassword] = useState(false);

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // Mise à jour de l'état avec les nouvelles valeurs des champs
    };

    // Fonction pour afficher un message d'erreur pour un champ spécifique
    const showError = (inputName, message) => {
        setErrors((prevErrors) => ({ ...prevErrors, [inputName]: message })); // Ajout de l'erreur au state
    };

    // Fonction pour effacer le message d'erreur d'un champ spécifique
    const showSuccess = (inputName) => {
        setErrors((prevErrors) => ({ ...prevErrors, [inputName]: '' })); // Suppression de l'erreur du state
    };

    // Fonction pour vérifier si l'email est valide
    const checkEmail = (value) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value.trim())) {
            showSuccess('Email'); // Email valide, suppression du message d'erreur
        } else {
            showError('Email', "L'adresse email n'est pas valide"); // Email invalide, affichage du message d'erreur
        }
    };

    // Fonction pour vérifier les champs obligatoires
    const checkRequired = (fields) => {
        fields.forEach((field) => {
            if (!formData[field]) {
                showError(field, `${field.charAt(0).toUpperCase() + field.slice(1)} est requis`); // Champ manquant, affichage du message d'erreur
            } else {
                showSuccess(field); // Champ rempli, suppression du message d'erreur
            }
        });
    };

    // Fonction de gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du formulaire

        // Vérification des champs obligatoires et de l'email
        checkRequired(['Email', 'Password']); // Ajout de "Password" à la vérification des champs obligatoires
        checkEmail(formData.Email);

        // Envoi du formulaire si tous les champs sont valides
        if (Object.values(errors).every((error) => !error)) {
            try {
                // Envoi des données du formulaire à l'API
                const response = await axios.post("URL_DE_VOTRE_API", formData);
                if (response.data.success) {
                    console.log("Formulaire envoyé !");
                    clearForm(); // Réinitialisation du formulaire
                } else {
                    alert(response.data.msg); // Affichage d'un message d'erreur en cas d'échec
                }
            } catch (error) {
                alert("Une erreur est survenue..."); // Affichage d'un message d'erreur en cas de problème avec la requête
            }
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
                    <div className={`form-control ${errors.Email ? 'error' : ''}`}>
                        <label htmlFor="Email">Email</label>
                        <input
                            type="email"
                            id="Email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                        />
                        {errors.Email && <small>{errors.Email}</small>} {/* Affichage du message d'erreur pour l'email */}
                    </div>

                    {/* Champ de saisie pour le mot de passe */}
                    <div className={`form-control ${errors.Password ? 'error' : ''}`}>
                        <label htmlFor="Password">Password </label>
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
                        {errors.Password && <small>{errors.Password}</small>} {/* Affichage du message d'erreur pour le mot de passe */}
                    </div>

                    {/* Bouton de soumission */}
                    <button type="submit"><span>Connexion</span></button>
                </form>
            </div>
        </section>
    );
}
