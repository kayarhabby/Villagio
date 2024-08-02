import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PriceBreakdown from './PriceBreakdown';

export default function ReservationForm() {
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        termsAccepted: false
    });

    const [errors, setErrors] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [priceBreakdown, setPriceBreakdown] = useState([]);

    const pricePerNight = 100;

    useEffect(() => {
        if (formData.checkIn && formData.checkOut) {
            updatePriceBreakdown(formData.checkIn, formData.checkOut);
        }
    }, [formData.checkIn, formData.checkOut]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const showError = (inputName, message) => {
        setErrors((prevErrors) => ({ ...prevErrors, [inputName]: message }));
    };

    const showSuccess = (inputName) => {
        setErrors((prevErrors) => ({ ...prevErrors, [inputName]: '' }));
    };

    const checkRequired = (fields) => {
        let isValid = true;
        fields.forEach((field) => {
            if (!formData[field]) {
                showError(field, `${field.replace(/([A-Z])/g, ' $1')} est requis`);
                isValid = false;
            } else {
                showSuccess(field);
            }
        });
        return isValid;
    };

    const updatePriceBreakdown = (checkIn, checkOut) => {
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        if (start < end) {
            const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            const breakdown = [];
            let total = 0;
            for (let i = 0; i < days; i++) {
                const currentDate = new Date(start);
                currentDate.setDate(start.getDate() + i);
                breakdown.push({
                    date: currentDate.toLocaleDateString(),
                    price: pricePerNight
                });
                total += pricePerNight;
            }
            setPriceBreakdown(breakdown);
            setTotalPrice(total);
        } else {
            setPriceBreakdown([]);
            setTotalPrice(0);
            showError('checkOut', 'La date de départ doit être après la date d\'arrivée');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = checkRequired(['checkIn', 'checkOut', 'termsAccepted']);
        if (isValid && formData.termsAccepted) {
            try {
                const response = await axios.post("/api/reservation", formData);
                if (response.data.success) {
                    console.log("Réservation effectuée !");
                    clearForm();
                } else {
                    alert(response.data.msg);
                }
            } catch (error) {
                console.error("Une erreur est survenue:", error);
                alert("Une erreur est survenue...");
            }
        } else if (!formData.termsAccepted) {
            showError('termsAccepted', 'Vous devez accepter les termes et conditions.');
        }
    };

    const clearForm = () => {
        setFormData({
            checkIn: '',
            checkOut: '',
            termsAccepted: false
        });
        setPriceBreakdown([]);
        setTotalPrice(0);
    };

    return (
        <form onSubmit={handleSubmit} className="reservation-form">
            <section>
                <h1>Booking Confirmation</h1>

                <article>
                    <h2>Booking Details</h2>
                    <div>
                        <label htmlFor="checkIn">Check-in :</label>
                        <input
                            type="date"
                            id="checkIn"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                        />
                        {errors.checkIn && <small>{errors.checkIn}</small>}
                    </div>
                    <div>
                        <label htmlFor="checkOut">Check-out :</label>
                        <input
                            type="date"
                            id="checkOut"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                        />
                        {errors.checkOut && <small>{errors.checkOut}</small>}
                    </div>
                </article>

                <article>
                    <PriceBreakdown
                        villaName="Villa Basilicata Grande"
                        rateType="Standard"
                        adults={8} // Exemple de nombre d'adultes
                        nights={priceBreakdown.length}
                        breakdown={priceBreakdown}
                        total={totalPrice}
                    />
                </article>

                <article>
                    <p>
                        En remplissant ce formulaire, vous reconnaissez avoir lu les termes et conditions,
                        les comprendre et les accepter.
                    </p>
                </article>

                <div className="terms_sign_up">
                    <label htmlFor="terms">
                        <input
                            type="checkbox"
                            id="terms"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                        />
                        J'ai lu et accepte les <span>termes & conditions</span>
                    </label>

                    {errors.termsAccepted && <small>{errors.termsAccepted}</small>}
                </div>
            </section>

            <button type="submit" className="btn">Book</button>
        </form>
    );
}
