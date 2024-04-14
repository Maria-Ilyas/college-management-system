import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Cards from "./Cards";
import CardAPI from "./CardAPI";
import Instruc from "./Instruc";
import Instructors from "./InstructureAPI";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="main-div">
                <div className="navbar-div">
                    <div className="logo-div">
                        <img decoding="async" src="https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2017/06/logo-footer.png" alt="logo-footer" />

                    </div>

                    <div className="navbar">
                        <ul>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">AboutMe</NavLink>
                            <NavLink to="/contact">ContactMe</NavLink>
                            <NavLink to="/signup">Signup</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </ul>
                    </div>

                </div>

                <div className="writing">
                    <div className="writing-div">
                        <h2>Enthusiastic Dev 😃</h2>
                        <p>Knack of building applications with front and back end operations.</p>
                        <button> <NavLink to="/about" id="read">Read More</NavLink></button>
                    </div>
                    <img src="https://assets-global.website-files.com/5f803b9261f6483ca515d44f/5ff7181a5d933f2cf9a7e690_1-1.png" alt="banner_image" />

                </div>


            </div>
            <div className="wave"></div>
            <br /> <br />

            <h2 className="course">COURSE CATEGORIES</h2>
            <div className="category">
                {CardAPI.map((elem) => {
                    return (<Cards key={elem.id} name={elem.name} subject={elem.subject} tagline={elem.tagline} />);
                })}

            </div>


            <div className="module3">
                <div className="module1">
                    <i className="fa-solid fa-swatchbook"></i>
                    <h3>Best Industry Leaders</h3>
                    <p>We pride ourselves on providing the best Learning Management System for WordPress.</p>
                </div>

                <div className="module2">
                    <i className="fa-solid fa-book"></i>
                    <h3>Learn Anything Online</h3>
                    <p>We pride ourselves on providing the best Learning Management System for WordPress.</p>
                </div>
                <div className="last">
                    <img src="https://elearningwp.thimpress.com/demo-04/wp-content/uploads/sites/10/2017/02/images-book-1-5.png" alt="online course" height="250px" width="350px" />
                </div>

            </div>
            <div className="basic1">
                <div className="under">
                    <h2 className="course">TOP INSTRUCTORS</h2>
                    <NavLink to="/all" className="linking">All Instructors<i className="fa-solid fa-angles-right"></i></NavLink>
                </div>
                <p>These instructors have many years of professional experience in their respective fields. They provide a comprehensive curriculum that is highly rated by hundreds of thousands of students.</p>
                <div className="top-instructors">
                    {Instructors.map((elem) => {
                        return <Instruc key={elem.id} image={elem.image} name={elem.name} />;
                    })}
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Home;