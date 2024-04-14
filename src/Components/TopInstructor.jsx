import React from 'react';
import Instruc from "./Instruc";
import Instructors from "./InstructureAPI";


const TopInstructor = () => {
    return (
        <>
            <div className="top-instructors">
                {Instructors.map((elem) => {
                    return <Instruc key={elem.id} image={elem.image} name={elem.name} />;
                })}
            </div>
        </>
    );
}

export default TopInstructor;
