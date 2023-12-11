import styled from 'styled-components';

export const LoadBtnStyled = styled.button`
  width: 200px;
  height: 48px;
  margin: 0 auto;
  padding: 10px 16px;
  border-radius: 2px;
  background-color: #5daef1;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  box-shadow: 0 4px 4px 0 rgba(134, 134, 134, 0.323),
    0 4px 4px 0 rgba(101, 101, 101, 0.19);

  &:hover,
  :focus {
    background-color: #016abc;
  }
`;
