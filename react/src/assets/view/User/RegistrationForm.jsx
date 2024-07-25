import React, { useState } from 'react';
import axios from 'axios';
import "../../css/Formulaire_inscription_connexion.css";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        Email: '',
        Password: ''
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

    const checkEmail = (inputName, value) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(value.trim())) {
            showSuccess(inputName);
        } else {
            showError(inputName, 'L\'adresse email n\'est pas valide');
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

    const checkLength = (inputName, value, min, max) => {
        if (value.length < min) {
            showError(inputName, `${inputName} doit contenir au moins ${min} caractères`);
        } else if (value.length > max) {
            showError(inputName, `${inputName} doit contenir moins de ${max} caractères`);
        } else {
            showSuccess(inputName);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        checkRequired(['Email', 'Password']);
        checkLength('Password', formData.Password, 6, 255);
        checkEmail('Email', formData.Email);

        if (Object.values(errors).every((error) => !error)) {
            try {
                const response = await axios.post("", formData);
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
            Password: ''
        });
    };

    return (
        <section id="form">
            <div className="form_container">
                <h2>Log in</h2>
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
                    <div className={`form-control ${errors.Password ? 'error' : ''}`}>
                        <label htmlFor="Password">Password</label>
                        <input
                            type="password"
                            id="Password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleChange}
                        />
                        {errors.Password && <small>{errors.Password}</small>}
                    </div>
                    <button type="submit"><span>Connexion</span></button>
                </form>
            </div>
        </section>
    );
}

