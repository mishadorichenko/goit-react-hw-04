import css from './ImageCard.module.css';

function ImageCard({ item: { urls, alt_description }, onImageClick }) {
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

export default ImageCard;
