import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [hamburger, hamburgerController] = useState(false);

    return (
        <>
            <nav>
                <div>
                    <h2>NagaTechnicals</h2>
                    <ul className={ hamburger ? "mobile-nav-view" : "nav-contet"} >
                        <li> 
                            <NavLink className="nav-link" activeClassName = 'active' exact to="/">Home</NavLink>
                        </li>
                        <li> 
                            <NavLink className="nav-link" activeClassName = 'active' exact to="/service">Services</NavLink>
                        </li>
                        <li> 
                            <NavLink className="nav-link" activeClassName = 'active' exact to="/about">About</NavLink>
                        </li>
                        <li> 
                            <NavLink className="nav-link" activeClassName = 'active' exact to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="hamburger-menu" onClick={() => hamburgerController(!hamburger)}>
                        <GiHamburgerMenu className="hamburger-icon"/>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default Navbar;