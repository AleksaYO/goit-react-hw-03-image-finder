import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalKey);
  }

  onClick = () => {
    this.setState({ modal: true });
  };

  onCloseModalKey = e => {
    if (e.code === 'Escape') {
      this.setState({ modal: false });
    }
  };

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.setState({ modal: false });
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModalKey);
  }

  render() {
    const {
      item: { id, webformatURL, largeImageURL },
    } = this.props;
    return (
      <>
        <li onClick={this.onClick} key={id} className={css.ImageGalleryItem}>
          <img
            className={css['ImageGalleryItem-image']}
            src={webformatURL}
            alt=""
          />
        </li>
        {this.state.modal && (
          <Modal
            onBackdropClick={this.onBackdropClick}
            largeImage={largeImageURL}
          />
        )}
      </>
    );
  }
}
