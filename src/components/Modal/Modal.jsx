import { useEffect } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';

export function Modal({ onCloseModal, modalImgURL }) {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onCloseModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalStyled>
        <img src={modalImgURL} alt="#"></img>
      </ModalStyled>
    </Overlay>
  );
}
