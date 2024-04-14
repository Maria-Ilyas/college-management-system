import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Signup from './Components/Signup';
import Login from './Components/Login';
import TopInstructor from './Components/TopInstructor';
import Contact from './Components/Contact';
import Details from './Components/Details';
import Student from './Components/Student';
import Model from './Components/Model';

const App = () => {

  const [rows, setRows] = useState([
    { topic: "What is DBMS", date: "21-09-2023", total: "50", obtain: "23" },
    { topic: "What is SE", date: "11-11-2023", total: "60", obtain: "21" },
    { topic: "What is Discrete Mathematics", date: "14-12-2024", total: "30", obtain: "20" }
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
  }

  const handleSubmit = (newRow) => {
    rowToEdit === null ?
      setRows([...rows, newRow]) :
      setRows(rows.map((currRow, idx) => {
        if (idx !== rowToEdit) return currRow

        return newRow;
      }))
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='/student/:userId' element={<Student rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />} />
      <Route path='/update' element={<Model closeModel={() => { setRowToEdit(null); }} onSubmit={handleSubmit} defaultValue={rowToEdit !== null && rows[rowToEdit]} />} />
      <Route path='/all' element={<TopInstructor />} />
    </Routes>
  );
}

export default App;

