import React from "react";
// import { IoMenu } from "react-icons/io5";

function Header() {
    return (
        <>
            <header className="header">
                <h2 className="logo">Portfolio.</h2>
                <nav className="navbar">
                    <a href="#about" className="active">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                </nav>
            </header>
        </>
    );
}

export default Header;