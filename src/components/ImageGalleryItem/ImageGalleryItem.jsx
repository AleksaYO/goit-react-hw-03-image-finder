import { Component } from 'react';
import css from '../ImageGallery/ImageGallery.module.css';
import cssItem from './ImageGalleryItem.module.css';
import { SearchImages } from 'Api';
import { Button } from 'components/Button/Button';
import { Notify } from 'notiflix';
import { ColorRing } from 'react-loader-spinner';

export class ImageGalleryItem extends Component {
  state = {
    gallery: [],
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const value = this.props.value;
    if (prevProps.value !== value) {
      this.setState({ isLoading: true });

      SearchImages(value, this.state.page)
        .then(arr => {
          this.setState({
            gallery: arr.hits,
            a: false,
          });
        })
        .catch(error => {
          Notify.failure(`${error.message}`);
        })
        .finally(this.setState({ isLoading: false }));
    } else if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });

      SearchImages(value, this.state.page).then(arr => {
        this.setState(prev => ({
          gallery: [...prev.gallery, ...arr.hits],
          isLoading: false,
        }));
      });
    }
  }

  onBtnClick = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    return (
      this.state.gallery.length > 0 && (
        <div className={css.box}>
          <ul className={css.ImageGallery}>
            {this.state.gallery.map(item => {
              return (
                <li key={item.id} className={cssItem.ImageGalleryItem}>
                  <img
                    className={cssItem['ImageGalleryItem-image']}
                    src={item.webformatURL}
                    alt=""
                  />
                </li>
              );
            })}
          </ul>
          {this.state.isLoading ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          ) : (
            <Button onBtnClick={this.onBtnClick} />
          )}
        </div>
      )
    );
  }
}
