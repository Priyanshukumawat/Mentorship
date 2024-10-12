// Button.js
import React from 'react';

function Button({ children, onClick, className }) {
    return (
        <button
            className={`px-4 py-2 rounded-lg bg-[#806543] hover:bg-brown-700 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
