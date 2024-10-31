import Navbar from "./Navbar";
import "../style/header.css";
import React, { useEffect, useState } from "react";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`myheader ${isScrolled ? 'scrolled' : ''}`}>
            <Navbar />
        </header>
    );
}

export default Header;
