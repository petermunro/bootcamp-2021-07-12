import React from 'react';

function Footer() {
    return (
        <footer className="footer-content">
            <div className="container">
                &copy; Acme Industries Inc, {new Date().getFullYear()}
            </div>
        </footer>
    );

}

export default Footer;