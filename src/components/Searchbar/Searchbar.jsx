import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onGetValue(this.state.value);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={css['SearchForm-button']}>
            <span className={css['SearchForm-button-label']}>Search</span>
          </button>

          <input
            onChange={this.onChange}
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.value}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
