import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="navbarDiv">
                <div className="logoDiv">
                    <img decoding="async" src="https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2017/06/logo-footer.png" alt="logo-footer" />

                </div>
                <div className='List'>
                    <ul>
                        <NavLink to="/" className="links">Home</NavLink>
                        <NavLink to="/about" className="links">AboutMe</NavLink>
                        <NavLink to="/contact" className="links">ContactMe</NavLink>
                        <NavLink to="/signup" className="links">Signup</NavLink>
                        <NavLink to="/login" className="links">Login</NavLink>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
