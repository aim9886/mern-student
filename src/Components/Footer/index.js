import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="text-sm text-center">
                <div className="d-flex flex-column flex-md-row justify-content-center">
                    <p className="m-5">
                        Copyright &copy; {new Date().getFullYear()}, DR-AIT. Designed & Developed by Hemanth Kumar
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
