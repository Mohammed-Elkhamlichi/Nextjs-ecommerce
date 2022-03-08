import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div
            // className='fixed right-0 left-0 bottom-0 text-center px-4 py-6 '
            className='text-center px-4 py-6 font-medium'
            style={{
                background: "#541C94",
                color: "#E08604",
                fontSize: "1.4rem",
            }}
        >
            E-Commerce&copy;{currentYear}
        </div>
    );
};

export default Footer;
