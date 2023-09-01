import { Component } from 'react';
import { Overlay, ModalContent } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKeyPress);
  }

  onEscKeyPress = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  render() {
    const { url, tags } = this.props;

    return (
      <Overlay>
        <ModalContent>
          <img src={url} alt={tags} />
        </ModalContent>
      </Overlay>
    );
  }
}
