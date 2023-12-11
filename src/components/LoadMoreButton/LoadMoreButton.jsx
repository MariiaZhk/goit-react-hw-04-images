import { LoadBtnStyled } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ incrementPage }) => {
  return (
    <>
      <LoadBtnStyled type="button" onClick={incrementPage}>
        Load more
      </LoadBtnStyled>
    </>
  );
};
