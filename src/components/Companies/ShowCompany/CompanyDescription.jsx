import React, { useState } from 'react';

function Description(props) {
    // Declare a new state variable, which we'll call "count"
    const [show, setShow] = useState(0);

    return (
        <div>
            <h4>Discription</h4>
            <div style={{ display: !show ? 'block' : 'none' }}>
                <p >{props.short}</p>
                <button onClick={() => setShow(true)}>Read More</button>
            </div>

            <div style={{ display: show ? 'block' : 'none' }}>

                <p>{props.long}</p>
                <button onClick={() => setShow(false)}>Read Less</button>
            </div>


        </div>
    );
}


export default Description;