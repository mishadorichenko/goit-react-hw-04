import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick }) {
  return (
    <div>
      <button className={css.loadMoreBtn} type="submit" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
