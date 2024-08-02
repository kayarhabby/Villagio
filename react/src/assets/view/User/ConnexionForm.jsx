import React, { useState } from 'react';
import axios from 'axios';
import "../../css/Formulaire_inscription_connexion.css";

export default function ConnexionForm() {
    const [formData, setFormData] = useState({
        Email: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const showError = (inputName, message) => {
        setErrors((prevErrors) => ({ ...prevErrors, [inputName]: message }));
    };

    const showSuccess = (inputName) => {
        setErrors((prevErrors) => ({ ...prevErrors, [inputName]: '' }));
    };

    const checkEmail = (value) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value.trim())) {
            showSuccess('Email');
        } else {
            showError('Email', "L'adresse email n'est pas valide");
        }
    };

    const checkRequired = (fields) => {
        fields.forEach((field) => {
            if (!formData[field]) {
                showError(field, `${field.charAt(0).toUpperCase() + field.slice(1)} est requis`);
            } else {
                showSuccess(field);
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        checkRequired(['Email']);
        checkEmail(formData.Email);

        if (Object.values(errors).every((error) => !error)) {
            try {
                const response = await axios.post("URL_DE_VOTRE_API", formData);
                if (response.data.success) {
                    console.log("Formulaire envoyé !");
                    clearForm();
                } else {
                    alert(response.data.msg);
                }
            } catch (error) {
                alert("Une erreur est survenue...");
            }
        }
    };

    const clearForm = () => {
        setFormData({
            Email: '',
        });
    };

    return (
        <section id="form">
            <div className="form_container">
                <h2>Connexion</h2>
                <form id="formulaire" onSubmit={handleSubmit}>
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

                    <button type="submit"><span>Connexion</span></button>
                </form>
            </div>
        </section>
    );
}
