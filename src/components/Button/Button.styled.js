import styled from 'styled-components';

export const LoadMore = styled.button`
  display: inline-block;
  min-width: 180px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  text-align: center;
  border: 0;
  text-decoration: none;
  margin: 10px 0;
  color: #fff;
  cursor: pointer;

  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
