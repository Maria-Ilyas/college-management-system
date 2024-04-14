import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Footer from "./Footer";
import TopInstructor from './TopInstructor';
import "./About.css";
const About = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className='contentDiv'>
                    <p> <NavLink to="/" className="home-section">Home</NavLink> <i className="fa-solid fa-chevron-right"></i> <span className='about-us'>About us</span></p>
                    <h2>About Us</h2>
                    <p>Pellentesque cursus arcu id magna euismod in elementum purus molestie.</p>
                </div>
            </div>
            <div className='secondDivv'>
                <div className='about-picture'>
                    <img src="https://img.freepik.com/free-vector/office-concept-illustration_114360-1406.jpg" alt="about-us" height="610px" width="550px" />
                </div>
                <div className='contents'>
                    <h1>Our Mission & Vision </h1>
                    <p>Promotion an ourselves up otherwise my. High what each snug rich far yet easy.In companions inhabiting prnceles at insensible do. Heard their sex
                        Prosperous so occasional assista discovered especi.</p> <br />


                    <div className='mission'>
                        <div className='mission-icon'>
                            <i class="fa fa-mortar-board" style={{ fontSize: "24px", lineHeight: "24px", verticalAlign: "middle" }} ></i>
                            <img width="50" height="100" src="https://img.icons8.com/dotty/80/vertical-line.png" alt="vertical-line" />
                        </div>
                        <div className='mission-education'>
                            <h3>Education</h3>
                            <p>The Python interpreter and the extensive standard library are freely available in source or binary form for all.</p>
                        </div>
                    </div>
                    <div className='mission'>
                        <div className='mission-icon' style={{ marginLeft: "5px" }}>
                            <i className="fa-solid fa-chalkboard" style={{ fontSize: "24px", lineHeight: "24px", verticalAlign: "middle" }}></i>
                            <img width="50" height="100" src="https://img.icons8.com/dotty/80/vertical-line.png" alt="vertical-line" />
                        </div>
                        <div className='mission-education'>
                            <h3>Elearning Online</h3>
                            <p>This tutorial introduces the reader informally to the basic concepts and features of the Python language.</p>
                        </div>
                    </div>
                    <div className='mission'>
                        <div className='mission-icon'>
                            <i className="fa fa-trophy" style={{ fontSize: "24px", lineHeight: "24px", verticalAlign: "middle" }} ></i>
                        </div>
                        <div className='mission-education'>
                            <h3 style={{ marginLeft: "20px" }}>Best Industry Leaders</h3>
                            <p>The Python interpreter and the extensive standard library are freely available in source or binary form for all.</p>
                        </div>
                    </div>
                </div>
            </div> <br /> <br />
            <h2 className="course">TOP INSTRUCTORS</h2><br />
            {/* <div className="top-instructors">
                {Instructors.map((elem) => {
                    return <Instruc key={elem.id} image={elem.image} name={elem.name} />;
                })}
            </div> <br /> <br /> */}
            <TopInstructor />
            <Footer />



        </>
    );
}

export default About;
