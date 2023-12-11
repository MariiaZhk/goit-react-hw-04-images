import { Component } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalStyled>
          <img src={this.props.modalImgURL} alt="#"></img>
        </ModalStyled>
      </Overlay>
    );
  }
}
