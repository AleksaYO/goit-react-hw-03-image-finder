import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    gallery: null,
    value: '',
  };

  onGetValue = value => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Searchbar onGetValue={this.onGetValue} />
        <ImageGalleryItem value={this.state.value} />
      </div>
    );
  }
}
