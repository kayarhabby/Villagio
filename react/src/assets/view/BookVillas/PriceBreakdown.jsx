import React from 'react';

const PriceBreakdown = ({ villaName, rateType, adults, nights, breakdown, total }) => {
    return (
        <div className="price-breakdown">
            <h2>Price Breakdown</h2>
            <div className="breakdown-header">
                <h3><a href="#villa-details">#{villaName}</a></h3>
                <p>Rate: {rateType}</p>
            </div>
            <div className="details">
                <p>Adults: {adults}</p>
                <p>Nights: {nights}</p>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Dates</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {breakdown.map((item, index) => (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.price} €</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="total">
                Total : {total} €
            </div>
        </div>
    );
};

export default PriceBreakdown;
