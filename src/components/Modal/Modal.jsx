import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalKey);
  }

  onCloseModalKey = e => {
    if (e.code === 'Escape') {
      this.props.onToggleModal();
    }
  };

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onToggleModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModalKey);
  }

  render() {
    // const { largeImageURL } = this.props;
    return (
      <div onClick={this.onBackdropClick} className={css.Overlay}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>
    );
  }
}
