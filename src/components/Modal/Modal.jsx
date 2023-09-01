import { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay, ModalContent } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

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
