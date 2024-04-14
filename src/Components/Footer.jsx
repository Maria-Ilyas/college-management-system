import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className='section1'>
                    <img decoding="async" src="https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2017/06/logo-footer.png" alt="logo-footer" />
                    <div className="below">
                        <p><i className="fa-regular fa-envelope"></i> info@e-learning.com</p>
                        <p><i className="fa-solid fa-phone"></i> + (0123) 456 789</p>
                        <p><i className="fa-solid fa-mobile-screen-button"></i> + (0122) 456 789</p>
                        <p><i className="fa-solid fa-location-dot"></i> no 200 Joseob, Canada</p>
                    </div>
                </div>

                <div className='section2'>
                    <h3>Company</h3>
                    <div className="below2">
                        <p>Courses</p>
                        <p>LP Checkout</p>
                        <p>LP Profile</p>
                        <p>Register</p>
                        <p>Membership</p>
                    </div>
                </div>
                <div className='section3'>
                    <h3>Link</h3>
                    <div className="below3">
                        <p> <NavLink className="footer-link" to="/about">About us</NavLink> </p>
                        <p> <NavLink className="footer-link" to="/contact">Contact us </NavLink></p>
                        <p> <NavLink className="footer-link" to="/signup">Sign Up </NavLink></p>
                        <p> <NavLink className="footer-link" to="/login">Login </NavLink></p>
                    </div>
                </div>
                <div className='section4'>
                    <h3>Support</h3>
                    <div className="below4">
                        <p> <NavLink className="footer-link" to="/details">Account</NavLink></p>
                        <p> <NavLink className="footer-link" to="/all">All Instructor</NavLink></p>
                        <p>Blog</p>
                        <p>Shop</p>
                    </div>
                </div>
                <div className='section5'>
                    <h3>Gallery</h3>
                    <div className="below5">
                        <img src="https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2023/01/course-2-1-150x150.jpg" alt="gallery_image" height="50px" width="70px" />
                        <img src="https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2015/06/pexels-photo-40120-150x150.jpeg" alt="gallery_image" height="50px" width="70px" />
                        <img src="https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2017/03/pexels-photo-159888-150x150.jpeg" alt="gallery_image" height="50px" width="70px" />
                        <img src="https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2017/03/pexels-photo-209137-150x150.jpeg" alt="gallery_image" height="50px" width="70px" /><br />
                        <img src="https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2023/01/course-2-1-150x150.jpg" alt="gallery_image" height="50px" width="70px" />
                        <img src="https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2015/06/pexels-photo-40120-150x150.jpeg" alt="gallery_image" height="50px" width="70px" />

                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
