import css from './LoadMore.module.css';

function LoadMore({ onClick }) {
  return (
    <div>
      <button className={css.btnLoadMore} type="submit" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMore;
