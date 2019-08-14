import React from 'react';
import PropsTypes from 'prop-types';
import { ErrorCard } from '../../styles/index';

const ErrorMsg = ({ error }) => (
  <ErrorCard>
    Error message:
    {' '}
    {error}
  </ErrorCard>
);

ErrorMsg.propTypes = ({
  error: PropsTypes.string.isRequired,
});

export default ErrorMsg;
