import React from "react";

import logo from "../assets/images/ngome_marian_shrine_nobg.png"
import "./navbar.css"

export default function Navbar(props) {
   
    return (
        
        <nav className="navbar">
            
                <a className="navbar-brand" href="w">
                    <img className="navbar-brand-img" src={logo} alt="Ngome Marian Shrine Logo" />
                </a>
                <ul className="nav-list">
                
                    <li className="nav-item">
                    <button 
                        className="nav-link" 
                        id="Home"
                        onClick={props.handleClick}
                            >Home
                    </button>
                    </li>
                
                    <li className="nav-item">
                    <button 
                        className="nav-link" 
                        id="Pilgrims"
                        onClick={props.handleClick}
                        >Pilgrims
                    </button>
                    </li>
                
                    <li className="nav-item">
                    <button 
                        className="nav-link" 
                        id="History"
                        onClick={props.handleClick}
                        >History
                    </button>
                    </li>
                
                    <li className="nav-item">
                        <button 
                            className="nav-link" 
                            id="News"
                            onClick={props.handleClick}
                            >News
                        </button>
                    </li>
                
                    <li className="nav-item">
                        <button 
                            className="nav-link" 
                            id="About"
                            onClick={props.handleClick}
                            >About
                        </button>
                    </li>
                
                    <li className="nav-item">
                        <button 
                            className="nav-link"
                            id="Contact"
                            onClick={props.handleClick}
                            >Contact
                        </button>
                    </li>
                
                </ul>
            
        </nav>

    )   
    
}