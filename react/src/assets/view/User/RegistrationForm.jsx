import React, { useState } from 'react';
import axios from 'axios';
import "../../css/Formulaire_inscription_connexion.css"; // Importation du fichier CSS pour le style

export default function RegistrationForm() {
    // Déclaration de l'état initial pour les données du formulaire
    const [formData, setFormData] = useState({
        FirstName: '',    // Prénom
        LastName: '',     // Nom
        Email: '',        // Email
        PhoneNumber: '',  // Numéro de téléphone
        Password: ''      // Mot de passe
    });

    // Déclaration de l'état pour les messages d'erreur de validation
    const [errors, setErrors] = useState({});

    // État pour gérer l'affichage du mot de passe
    const [showPassword, setShowPassword] = useState(false);

    // Gestion des changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // Mise à jour de l'état avec les nouvelles valeurs des champs
    };

    // Affichage d'un message d'erreur pour un champ spécifique
    const showError = (inputName, message) => {
        setErrors((prevErrors) => ({ ...prevErrors, [inputName]: message })); // Ajout d'un message d'erreur pour le champ concerné
    };

    // Suppression du message d'erreur d'un champ spécifique
    const showSuccess = (inputName) => {
        setErrors((prevErrors) => ({ ...prevErrors, [inputName]: '' })); // Suppression du message d'erreur pour le champ concerné
    };

    // Vérification de la validité de l'email
    const checkEmail = (value) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value.trim())) {
            showSuccess('Email'); // Email valide, suppression du message d'erreur
        } else {
            showError('Email', "L'adresse email n'est pas valide"); // Email invalide, affichage du message d'erreur
        }
    };

    // Vérification de la validité du numéro de téléphone
    const checkPhoneNumber = (value) => {
        const re = /^\d{10}$/; // Exemple de regex pour un numéro de téléphone à 10 chiffres
        if (re.test(value.trim())) {
            showSuccess('PhoneNumber'); // Numéro valide, suppression du message d'erreur
        } else {
            showError('PhoneNumber', 'Le numéro de téléphone doit être valide'); // Numéro invalide, affichage du message d'erreur
        }
    };

    // Vérification des champs obligatoires
    const checkRequired = (fields) => {
        fields.forEach((field) => {
            if (!formData[field]) {
                showError(field, `${field.charAt(0).toUpperCase() + field.slice(1)} est requis`); // Champ requis, affichage du message d'erreur
            } else {
                showSuccess(field); // Champ rempli, suppression du message d'erreur
            }
        });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        // Vérification des champs obligatoires et des formats
        checkRequired(['FirstName', 'LastName', 'Email', 'PhoneNumber', 'Password']);
        checkEmail(formData.Email);
        checkPhoneNumber(formData.PhoneNumber);

        // Soumission du formulaire si toutes les validations sont réussies
        if (Object.values(errors).every((error) => !error)) {
            try {
                // Envoi des données du formulaire à l'API via une requête POST
                const response = await axios.post("URL_DE_VOTRE_API", formData);
                if (response.data.success) {
                    console.log("Formulaire envoyé !");
                    clearForm(); // Réinitialisation du formulaire après succès
                } else {
                    alert(response.data.msg); // Affichage d'un message d'erreur en cas de réponse négative
                }
            } catch (error) {
                alert("Une erreur est survenue..."); // Affichage d'un message d'erreur en cas d'échec de la requête
            }
        }
    };

    // Réinitialisation du formulaire
    const clearForm = () => {
        setFormData({
            FirstName: '',
            LastName: '',
            Email: '',
            PhoneNumber: '',
            Password: '' // Réinitialisation du champ "Mot de passe"
        });
    };

    return (
        <section id="form">
            <div className="form_container">
                <h2>Inscription</h2>
                <form id="formulaire" onSubmit={handleSubmit}>

                    {/* Champ de saisie pour le prénom */}
                    <div className={`form-control ${errors.FirstName ? 'error' : ''}`}>
                        <label htmlFor="FirstName">First Name</label>
                        <input
                            type="text"
                            id="FirstName"
                            name="FirstName"
                            value={formData.FirstName}
                            onChange={handleChange}
                        />
                        {errors.FirstName && <small>{errors.FirstName}</small>}
                    </div>

                    {/* Champ de saisie pour le nom de famille */}
                    <div className={`form-control ${errors.LastName ? 'error' : ''}`}>
                        <label htmlFor="LastName">Last Name</label>
                        <input
                            type="text"
                            id="LastName"
                            name="LastName"
                            value={formData.LastName}
                            onChange={handleChange}
                        />
                        {errors.LastName && <small>{errors.LastName}</small>}
                    </div>

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
                        {errors.Email && <small>{errors.Email}</small>}
                    </div>

                    {/* Champ de saisie pour le numéro de téléphone */}
                    <div className={`form-control ${errors.PhoneNumber ? 'error' : ''}`}>
                        <label htmlFor="PhoneNumber">Phone Number</label>
                        <input
                            type="text"
                            id="PhoneNumber"
                            name="PhoneNumber"
                            value={formData.PhoneNumber}
                            onChange={handleChange}
                        />
                        {errors.PhoneNumber && <small>{errors.PhoneNumber}</small>}
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
                        {errors.Password && <small>{errors.Password}</small>}
                    </div>

                    {/* Bouton de soumission */}
                    <button type="submit"><span>Inscription</span></button>
                </form>
            </div>
        </section>
    );
}
