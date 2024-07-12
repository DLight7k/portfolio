import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-icons-container">
                <a href="https://github.com/DLight7k" rel="noreferrer" target="_blank"><FaSquareGithub className="footer-icons"/></a>
                <a href="https://www.linkedin.com/in/desmond-reese-1725432b9/" rel="noreferrer" target="_blank"><FaLinkedin className="footer-icons"/></a>
            </div>
            <p>Copyright &copy; 2024, Desmond Reese</p>
        </footer>
    );
}

export default Footer;