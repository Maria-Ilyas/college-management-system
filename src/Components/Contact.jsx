import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import { NavLink } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const postData = async (event) => {
        event.preventDefault();

        const { name, email, subject, message } = user;

        if (name && email && subject && message) {
            const res = await fetch("https://reactcontact-e6fbd-default-rtdb.firebaseio.com/contactform.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                }),
            });
            if (res) {
                setUser({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
                alert("Data Stored Successfully");
            }
        } else {
            alert("Please fill all field");
        }


    };

    return (
        <>
            <Navbar />
            <div className='contentDiv'>
                <p> <NavLink to="/" className="home-section">Home</NavLink> <i className="fa-solid fa-chevron-right"></i> <span className='about-us'>Contact us</span></p>
                <h2>Contact Us</h2>
                <p>Pellentesque cursus arcu id magna euismod in elementum purus molestie.</p>
            </div>

            <div className='contact-us'>
                <h2>Leave A Message</h2>
                <p>Your email address will not be published. Required fields are marked.</p>
                <form method='POST'>
                    <input required type="text" placeholder='Name*' name='name' value={user.name} onChange={getUserData} />
                    <input required type="email" placeholder='Email*' className='email' name='email' onChange={getUserData} value={user.email} />
                    <div className='subject'>
                        <input required type="text" placeholder='Subject' name='subject' value={user.subject} onChange={getUserData} />
                    </div>
                    <div className='text-area'>
                        <textarea required cols="60" rows="10" placeholder='Message' name='message' value={user.message} onChange={getUserData}></textarea>
                    </div>
                    <button className='send-btn' onClick={postData}>Send <i className="fa-regular fa-paper-plane"></i></button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
