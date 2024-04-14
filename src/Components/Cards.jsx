import React from 'react';
import "./Card.css";


const Cards = ({name, subject, tagline}) => {
     return (
          <>
               <div className='cards-div'>
                    <i className={name}></i>
                    <div className='subject'>
                         <h3>{subject}</h3>
                         <p>{tagline}</p>
                    </div>
               </div>
          </>
     );
}

export default Cards;