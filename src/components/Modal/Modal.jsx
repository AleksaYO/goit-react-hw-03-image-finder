import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  render() {
    const { onBackdropClick } = this.props;
    return (
      <div id="a" onClick={onBackdropClick} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.largeImage} alt="" />
        </div>
      </div>
    );
  }
}
