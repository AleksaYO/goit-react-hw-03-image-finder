import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };

  onToggleModal = () => {
    this.setState(({ modal }) => ({
      modal: !modal,
    }));
  };

  render() {
    const {
      item: { id, webformatURL, largeImageURL },
    } = this.props;

    return (
      <>
        <li
          onClick={this.onToggleModal}
          key={id}
          className={css.ImageGalleryItem}
        >
          <img
            className={css['ImageGalleryItem-image']}
            src={webformatURL}
            alt=""
          />
        </li>

        {this.state.modal && (
          <Modal onToggleModal={this.onToggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
