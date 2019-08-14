import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../styles';
import { Button } from '../../../styles/index';

function Description({ short, long }) {
  // Declare a new state variable, which we'll call "count"
  const [show, setShow] = useState(true);

  return (
    <div>
      <h4>Discription</h4>
      <div style={{ display: show === false ? 'block' : 'none' }}>
        <p>{short}</p>

        <Wrapper>
          <Button width="120px" fontSize="16px;" onClick={() => setShow(true)}>Read Less</Button>
        </Wrapper>
      </div>

      <div style={{ display: show === true ? 'block' : 'none' }}>

        <p>{long}</p>
        <Wrapper>
          <Button width="120px" fontSize="16px;" onClick={() => setShow(false)}>Read More</Button>
        </Wrapper>
      </div>


    </div>
  );
}

Description.propTypes = ({
  short: PropTypes.string,
  long: PropTypes.string,
});

Description.defaultProps = ({
  short: '',
  long: '',
});

export default Description;
