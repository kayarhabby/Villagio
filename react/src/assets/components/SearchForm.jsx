import React, { useState } from 'react';
import axios from 'axios';

export default function SearchForm() {
    const [formData, setFormData] = useState({
        CheckIn: '',
        CheckOut: '',
        Adults: '1',
        Children: '0',
        Region: 'AllVillas',
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

    const checkRequired = (fields) => {
        let valid = true;
        fields.forEach((field) => {
            if (!formData[field]) {
                showError(field, `${field.replace(/([A-Z])/g, ' $1')} est requis`);
                valid = false;
            } else {
                showSuccess(field);
            }
        });
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requiredFields = ['CheckIn', 'CheckOut', 'Adults', 'Children', 'Region'];
        if (checkRequired(requiredFields)) {
            try {
                const response = await axios.post("/api/search", formData);
                if (response.data.success) {
                    console.log("Recherche envoyée !");
                    clearForm();
                } else {
                    alert(response.data.msg);
                }
            } catch (error) {
                console.error("Une erreur est survenue:", error);
                alert("Une erreur est survenue...");
            }
        }
    };

    const clearForm = () => {
        setFormData({
            CheckIn: '',
            CheckOut: '',
            Adults: '1',
            Children: '0',
            Region: 'AllVillas',
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
                    {errors.CheckIn && <small>{errors.CheckIn}</small>}
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
                    {errors.CheckOut && <small>{errors.CheckOut}</small>}
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
                    {errors.Adults && <small>{errors.Adults}</small>}
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
                    {errors.Children && <small>{errors.Children}</small>}
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
                        <option value="AllVillas">All Villas</option>
                        <option value="Aosta Valley">Aosta Valley</option>
                        <option value="Lazio">Lazio</option>
                        <option value="Le Marche">Le Marche</option>
                    </select>
                    {errors.Region && <small>{errors.Region}</small>}
                </div>
            </section>
            <button type="submit" className="btn">SEARCH</button>
        </form>
    );
}
