import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
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
        <ImageGallery value={this.state.value} />
      </div>
    );
  }
}
