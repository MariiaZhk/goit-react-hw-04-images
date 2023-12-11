import styled from 'styled-components';

export const SearchBarWrap = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #5daef1;
  box-shadow: 0 4px 4px 0 rgba(134, 134, 134, 0.323),
    0 4px 4px 0 rgba(144, 143, 143, 0.19);
`;

export const SearchBtnStyled = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  background-image: url('https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormStyled = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchInputStyled = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 0 10px;

  /* &:hover {
    background-color: #ffffff;
  } */
`;

export const LabelStyled = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
