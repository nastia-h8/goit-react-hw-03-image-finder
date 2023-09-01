import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Item, Img } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
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
