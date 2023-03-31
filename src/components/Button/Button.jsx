import css from './Button.module.css';

export function Button({ onBtnClick }) {
  return (
    <button onClick={onBtnClick} className={css.Button} type="button">
      Load More
    </button>
  );
}
