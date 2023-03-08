import React from "react";

import logo from "../assets/images/ngome-logo-white-nobg.png"
import "./navbar.css"

export default function Navbar() {
   
    return (
            
        <nav className="navbar">
            
                <a className="navbar-brand" href="https://www.google.com">
                    <img className="navbar-brand-img" src={logo} alt="Ngome Marian Shrine Logo" />
                </a>
                <ul className="nav-list">
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com">Pilgrims</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com">History</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.google.com">Contact</a>
                    </li>
                </ul>
            
        </nav>

    )   
    
}