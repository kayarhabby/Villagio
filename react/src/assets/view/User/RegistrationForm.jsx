import React, { useState } from 'react';
import axios from 'axios';
import "../../css/Formulaire_inscription_connexion.css";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: ''
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

    const checkPhoneNumber = (value) => {
        const re = /^\d{10}$/; // Ajustez le regex selon le format attendu pour le numéro de téléphone
        if (re.test(value.trim())) {
            showSuccess('PhoneNumber');
        } else {
            showError('PhoneNumber', 'Le numéro de téléphone doit être valide');
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
        checkRequired(['FirstName', 'LastName', 'Email', 'PhoneNumber']);
        checkEmail(formData.Email);
        checkPhoneNumber(formData.PhoneNumber);

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
            FirstName: '',
            LastName: '',
            Email: '',
            PhoneNumber: ''
        });
    };

    return (
        <section id="form">
            <div className="form_container">
                <h2>Inscription</h2>
                <form id="formulaire" onSubmit={handleSubmit}>

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

                    <button type="submit"><span>Inscription</span></button>
                </form>
            </div>
        </section>
    );
}
