import React from 'react';
import PropTypes from 'prop-types';

import { LoadMore } from './Button.styled';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load More
    </LoadMore>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func,
};

export default LoadMoreBtn;
