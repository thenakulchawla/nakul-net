import React from 'react';

const FooterComponent = () => {
    return (
        <div className="nakul-footer nakul-row">
            <p>Nakul Chawla </p>
            <p> &nbsp; &copy; &nbsp;</p>
            <p> {new Date().getFullYear()} </p>
        </div>
    );
}

export const Footer = FooterComponent;