import css from './PhotoCard.module.css';

function PhotoCard({ item: { urls, alt_description }, onImageClick }) {
  return (
    <div>
      <img
        className={css.image}
        src={urls.small}
        alt={alt_description}
        onClick={() => onImageClick(urls.regular, alt_description)}
      />
    </div>
  );
}

export default PhotoCard;
