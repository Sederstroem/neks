import React, { useState } from "react";
import CloseButton from "./CloseButton";
import { RxHamburgerMenu } from "react-icons/rx";


export default function Header() {
    const [ isOpen, setIsOpen ] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return(
        <header>
            <h1>NEKS</h1>

                {/* Hamburger Icon */}
                {!isOpen && (
                    <RxHamburgerMenu onClick={toggleMenu} size={30}/>
                    // <div className="hamburger" onClick={toggleMenu}>
                    //     <span className="bar"></span>
                    //     <span className="bar"></span>
                    //     <span className="bar"></span>
                    // </div>
                )}

                {/* Close Button */}
                {isOpen && (
                    <div className="close-button" onClick={toggleMenu}>
                        <CloseButton />
                    </div>
                )}

                {/* Regular Menu for larger screens */}
                <nav className={`nav ${isOpen ? "open" : ""}`}>
                    <ul className="header-links">
                        <li><a href="/courses" className="header-link">Courses</a></li>
                        <li><a href="/art" className="header-link">Art</a></li>
                        <li><a href="/projects" className="header-link">Projects</a></li>
                    </ul>
                </nav>
        </header>
    );
};