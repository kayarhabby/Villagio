// components/Navigation.js
import React from 'react';

function Navigation({ currentPage, totalPages, nextPage, prevPage}) {
    return (
        <div className="link">
            {currentPage > 0 &&
                <button onClick={prevPage} className="btn">
                    Prev
                </button>}
            {currentPage < totalPages - 1 &&
                <button onClick={nextPage} className="btn">
                    Next
                </button>}
        </div>
    );
}

export default Navigation;
