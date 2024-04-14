import React, { useState } from 'react';
import Navbar from './Navbar';
import "./Card.css";
import { NavLink } from 'react-router-dom';

const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        subject: "",
    })
    const [info, setInfo] = useState([]);
    const getData = (e) => {
        const { value, name } = e.target;
        setData(() => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    const addItem = (e) => {
        e.preventDefault();

        const { name, email, password, subject } = data;

        if (name === "") {
            alert("name field is required")
        } else if (email === "") {
            alert("email field is required")
        } else if (!email.includes("@")) {
            alert("Please Enter valid email address")
        } else if (password === "") {
            alert("password is required")
        } else if (password.length < 8) {
            alert("Password length should be greater than 8")
        } else if (subject === "") {
            alert("subject field is required")
        } else {
            console.log("data added successfully");

            localStorage.setItem("user-sign", JSON.stringify([...info, data]));
        }
    }
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='box'>
                    <h2>Sign Up</h2>
                     <h5>(As a teacher)</h5>
                    <div className='input-div'>
                        <i className="fa-solid fa-user"></i>
                        <input required type="text" name='name' placeholder='Name' onChange={getData} />
                    </div>

                    <div className='input-div'>
                        <i className="fa-solid fa-envelope"></i>
                        <input required type="email" name='email' placeholder='Email Id' onChange={getData} />
                    </div>
                    <div className='input-div'>
                        <i className="fa-solid fa-lock"></i>
                        <input required type="password" name='password' placeholder='Password' onChange={getData} />
                    </div>
                    <div className='input-div'>
                        <i className="fa-solid fa-plus"></i>
                        <select name="subject" onChange={getData}>
                            
                            <option value="Business">Business</option>
                            <option value="Accounting">Accounting</option>
                            <option value="SCIENCE & TECHNOLOGY">SCIENCE & TECHNOLOGY</option>
                            <option value="HEALTH & PSYCHOLOGY">HEALTH & PSYCHOLOGY</option>
                            <option value="CREATIVE ARTS & MEDIA">CREATIVE ARTS & MEDIA</option>
                        </select>
                    </div>
                    <div className='buttonsDiv'>
                        <button className='submit signup' onClick={addItem}> <NavLink to="/login" className="signup">Sign Up</NavLink> </button>
                    </div>
                    <p className='already'>Already have an Account <NavLink to="/login" className="account">SignIn</NavLink></p>
                </div>
            </div>
        </>
    );
}

export default Signup;
