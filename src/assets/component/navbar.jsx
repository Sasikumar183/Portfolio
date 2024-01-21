import React, { useState } from "react";
import style from "./navbar.module.css"; // Import the CSS module
import "./navbar.module.css";
import closeIcon from "./images/closeIcon.png";
import menuIcon from "./images/menuIcon.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={style.navbar}>
            <a id={style.title} href="/">
                My Portfolio
            </a>
            <img
                className={style.menubtn}
                src={menuOpen ? closeIcon : menuIcon}
                style={{ marginTop: "1px", marginRight: "10%" }}
                alt="Notfound"
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            />

            <ul className={`${style.Menu} ${menuOpen && style.menuOpen}`}>
                <li>
                <a
        href="#about">
                About</a>
                </li>
                <li>
                    <a href="#skill">Skills</a>
                </li>
                <li>
                    <a href="#project">Project</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
