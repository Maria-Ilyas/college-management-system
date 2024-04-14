import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import "./Details.css";
import { NavLink } from 'react-router-dom';



const Details = () => {
    const [users, setUsers] = useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])





    const [logindata, setLoginData] = useState([]);

    const history = useNavigate();
    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");

        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLoginData(user);
        }
    }
    const userlogout = () => {
        localStorage.removeItem("user_login");
        history("/signup");
    }
    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            <Navbar />
            {
                logindata.length === 0 ? "Error...Please Sign up" :
                    <>
                        {/* <button onClick={userlogout}>logout</button> */}

                        <div className='welcome-div'>
                            <img src="https://static.vecteezy.com/system/resources/previews/010/640/479/non_2x/happy-group-of-kindergarten-kids-holding-a-welcome-text-illustration-free-vector.jpg" height="480px" width="100%" />
                        </div>
                        <div>
                            <table id="customers">
                                <tr>
                                    <th>Roll No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th>More Info</th>
                                </tr>
                                {/* {StudentsAPI.map((elem) => {
                                    return (
                                        <tr key={elem.rollno}>
                                            {elem.subject === logindata[0].subject ? <>
                                                <td>{elem.rollno}</td>
                                                <td>{elem.name}</td>
                                                <td>{elem.subject}</td>
                                                <td className='last-td'> <NavLink to="/student/:userId" className="view">View</NavLink></td>
                                            </> : null}
                                        </tr>
                                    );
                                })} */}
                                {
                                    users && users.map((user) => (
                                        <tr key={user.id}>
                                            <td> {user.id}</td>
                                            <td> {user.name} </td>
                                            <td> {user.email}</td>
                                            <td>{logindata[0].subject}</td>
                                            <td className='last-td'> <NavLink to={`/student/${user.id}`} className="view">View</NavLink></td>

                                        </tr>
                                    )

                                    )
                                }

                            </table>

                        </div>



                    </>
            }
        </>
    );
}

export default Details;
