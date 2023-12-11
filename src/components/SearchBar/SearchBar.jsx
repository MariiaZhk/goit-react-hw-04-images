import {
  SearchBarWrap,
  SearchBtnStyled,
  SearchFormStyled,
  SearchInputStyled,
} from './SearchBar.styled';

export const SearchBar = ({ searchQuery, handleSubmit, backgroundSVG }) => {
  return (
    <SearchBarWrap>
      <SearchFormStyled onSubmit={handleSubmit}>
        <SearchBtnStyled type="submit"></SearchBtnStyled>

        <SearchInputStyled
          name="searchQuery"
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchFormStyled>
    </SearchBarWrap>
  );
};
