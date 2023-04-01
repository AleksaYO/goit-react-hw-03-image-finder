import { Component } from 'react';
import css from '../ImageGallery/ImageGallery.module.css';
import { SearchImages } from 'Api';
import { Button } from 'components/Button/Button';
import { Notify } from 'notiflix';
import { ColorRing } from 'react-loader-spinner';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const value = this.props.value;

    if (
      value === prevProps.value &&
      this.state.page !== prevState.page &&
      this.state.page === 1
    ) {
      this.onFetchInfo();
    }

    if (value !== prevProps.value && this.state.page !== 1) {
      this.setState({ gallery: [], page: 1 });
    }

    if (prevProps.value !== value && this.state.page === 1) {
      this.setState({ isLoading: true, page: 1 });
      this.onFetchInfo();
    }

    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.setState({ isLoading: true });
      this.onFetchInfo();
    }
  }

  onFetchInfo = () => {
    SearchImages(this.props.value, this.state.page)
      .then(arr => {
        this.setState(prev => ({
          gallery: [...prev.gallery, ...arr.hits],
          isLoading: false,
        }));
      })
      .catch(error => {
        Notify.failure(`${error.message}`);
      })
      .finally(this.setState({ isLoading: false }));
  };

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
              return <ImageGalleryItem key={item.id} item={item} />;
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
