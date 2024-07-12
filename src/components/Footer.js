import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-icons-container">
                <FaSquareGithub className="footer-icons"/>
                <FaLinkedin className="footer-icons"/>
            </div>
            <p>Copyright &copy; 2024, Desmond Reese</p>
        </footer>
    );
}

export default Footer;