import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Notify = ({ total, length }) => {
  let message = '';
  if (total === length && total !== 0) {
    message = 'This is all we found for your request';
  }
  if (total === 0) {
    message = 'Nothing found for your request. Try again';
  }

  return <NotifyText>{message}</NotifyText>;
};

const NotifyText = styled.p`
  color: #fff;
  background-color: #3f51b5;
  padding: 20px;
`;

Notify.propTypes = {
  total: PropTypes.any,
  length: PropTypes.number,
};

export default Notify;
