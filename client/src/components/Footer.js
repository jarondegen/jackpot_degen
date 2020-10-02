import React from 'react';
import '../css/footer.css';

const Footer = () => {
    return(
        <div className="footer-container">
            <p className="footer-created-by">Created by Jaron Degen</p>
            <p className="footer-jpd">2020 Jackpot Degen</p>
            <div className="footer-github-container">
                <a className="footer-github-link" target="_blank" href="https://github.com/jarondegen/jackpot_degen">
                    <div className="footer-github-logo"></div>
                </a>
            </div>
        </div>
    );
};

export default Footer;