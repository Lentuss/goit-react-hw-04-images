import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Loader = ({ children }) => {
  return <LoaderWrapper>{children}</LoaderWrapper>;
};
export default Loader;
