import React, { useState } from 'react';
import { Wrapper } from './Elements';
import { Button } from '../../../styles/index';

function Description(props) {
    // Declare a new state variable, which we'll call "count"
    const [show, setShow] = useState(true);
    console.log(show);


    return (
        <div>
            <h4>Discription</h4>
            <div style={{ display: show === false ? 'block' : 'none' }}>
                <p>{props.short}</p>

                <Wrapper>
                    <Button width="120px" fontSize="16px;" onClick={() => setShow(true)}>Read Less</Button>
                </Wrapper>
            </div>

            <div style={{ display: show === true ? 'block' : 'none' }}>

                <p>{props.long}</p>
                <Wrapper>
                    <Button width="120px" fontSize="16px;" onClick={() => setShow(false)}>Read More</Button>
                </Wrapper>
            </div>


        </div>
    );
}


export default Description;