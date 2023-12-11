import { GalleryImgStyled, GalleryItemStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  onImageClick,
}) => {
  return (
    <GalleryItemStyled id={id}>
      <GalleryImgStyled
        onClick={() => onImageClick(largeImageURL)}
        src={webformatURL}
        alt="#"
      />
    </GalleryItemStyled>
  );
};
