import { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { Item, Img } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  };

  state = {
    isModalOpen: false,
  };

  onModalToggle = () => {
    this.setState(pState => ({
      isModalOpen: !pState.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { tags, webformatURL, largeImageURL } = this.props.item;
    return (
      <Item onClick={this.onModalToggle}>
        <Img src={webformatURL} alt={tags} loading="lazy" />
        {isModalOpen && (
          <Modal
            url={largeImageURL}
            tags={tags}
            onModalClose={this.onModalToggle}
          />
        )}
      </Item>
    );
  }
}
