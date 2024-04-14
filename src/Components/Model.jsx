import React, { useState } from 'react';
import "./Model.css";
import { useNavigate } from 'react-router-dom';

const Model = ({ closeModel, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue || {
        topic: "",
        date: "",
        total: "",
        obtain: ""
    });

    const navigate = useNavigate();
    console.log(navigate);

    const validateForm = () => {
        if (formState.topic && formState.date && formState.total && formState.obtain) {
            return true;
        } else {

            return false;
        }
    }
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        onSubmit(formState)
        navigate(-1);
    }

    return (
        <div className='quiz-form'
            onClick={(e) => {
                if (e.target.className === "update-btn") closeModel();
            }}>
            <form className="decor">
                <div class="form-inner">
                    <h1>Add Quiz</h1>
                    <input className='update-input' type="text" placeholder="Enter a topic" name='topic' value={formState.topic} onChange={handleChange} />
                    <input className='update-input' type="date" value={formState.date} name='date' onChange={handleChange} />
                    <input className='update-input' type="number" placeholder='Enter total marks' name='total' value={formState.total} onChange={handleChange} />
                    <input className='update-input' type="number" placeholder='Enter obtain marks' name='obtain' value={formState.obtain} onChange={handleChange} />
                    <button type='submit' className='update-btn' onClick={handleSubmit}>Submit</button>
                </div>
            </form>

        </div>
    );
}

export default Model;