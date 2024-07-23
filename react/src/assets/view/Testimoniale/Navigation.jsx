// components/Navigation.js
import React from 'react';
// import './Navigation.css';

function Navigation({ currentPage, totalPages, nextPage, prevPage}) {
    return (
        <div className="navigation">
            {currentPage > 0 && <button onClick={prevPage}>Prev</button>}
            {currentPage < totalPages - 1 && <button onClick={nextPage}>Next</button>}
        </div>
    );
}

export default Navigation;
