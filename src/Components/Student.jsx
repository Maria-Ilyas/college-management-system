import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import "./Student.css";


const Student = ({ rows, deleteRow, editRow }) => {
    const params = useParams()
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            .then(response => response.json())
            .then(json => setUser(json))
    }, [params])

    return (
        <div className='whole-content'>
            <h1>Student's Profile</h1>
            {
                user && (
                    <div className='profile'>
                        
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Profile-image" height="150px" width="150px" />
                        <div className='moreInfo'>
                            <div className='portion1'>
                                <p id='rollNo'>Roll No: &nbsp; {user.id}</p>
                                <p id='email'>Email: &nbsp; {user.email}</p>
                            </div>
                            <div className='portion2'>
                                <p id='name'>Name : {user.name}</p>
                                <p id='phone'>Phone: {user.phone}</p>
                            </div>
                            <div className='portion3'>
                                <p id='website'>Website: {user.website}</p>
                                <p id='city'>UserName: &nbsp; {user.username}</p>
                            </div>
                            <div className='empty'></div>
                        </div>
                    </div>
                )
            }
            <div>
                <h1 id='quiz-detailss'>Quiz's Details</h1>
                <table id="customers">
                    <tr>

                        <th>Topic</th>
                        <th>Date</th>
                        <th>Obtain Marks</th>
                        <th>Total Marks</th>
                        <th>Actions</th>
                    </tr>
                    {
                        rows.map((elem, index) => {
                            return (
                                <tr key={index}>

                                    <td>{elem.topic}</td>
                                    <td>{elem.date}</td>
                                    <td>{elem.total}</td>
                                    <td>{elem.obtain}</td>
                                    <td className='last-td'> <NavLink to="/update"><i className="fa-regular fa-pen-to-square" onClick={() => editRow(index)} title='Edit Quiz'></i></NavLink>
                                        <i className="fa-solid fa-trash" onClick={() => deleteRow(index)} title='Delete Quiz'></i></td>
                                </tr>
                            );
                        })
                    }
                </table>
                <button className='add-btn'> <NavLink to="/update" className="add-quiz">Add Quiz</NavLink> </button>

            </div>



        </div>
    );
}

export default Student;
