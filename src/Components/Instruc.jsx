import React from 'react';

const Instruc = ({name,image}) => {
  return (
    <div className='top'>
        <img src={image} alt="instructors" height="250px" width="250px" />
        <div className='middle'>
             <div className='text'>{name}</div>
        </div>
    </div>
  );
}

export default Instruc;
