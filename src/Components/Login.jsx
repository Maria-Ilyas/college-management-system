import React, { useState } from 'react';
import Navbar from './Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
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

    const addItem = () => {

        const getuserArr = localStorage.getItem("user-sign");
        console.log(getuserArr);

        const { email, password } = data;

        if (email === "") {
            alert("email field is required")
        } else if (!email.includes("@")) {
            alert("Please Enter valid email address")
        } else if (password === "") {
            alert("password is required")
        } else if (password.length < 8) {
            alert("Password length should be greater than 8")
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);             //convert into object
                const userlogin = userdata.filter((elem, index) => {
                    return elem.email === email && elem.password === password
                });
                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login successfully");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))
                    history("/details");
                }
            }
        }
    }
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='box logg'>
                    <h2>Login</h2>
                    <h5>(As a teacher)</h5>
                    <div className='input-div'>
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" name='email' placeholder='Email Id' onChange={getData} />
                    </div>
                    <div className='input-div'>
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" name='password' placeholder='Password' onChange={getData} />
                    </div>

                    <div className='buttonsDiv'>
                        <button className='submit signup' onClick={addItem}> <NavLink className="signup">Login</NavLink> </button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
