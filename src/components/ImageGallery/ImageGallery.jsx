import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ items, onImageClick }) {
  return (
    <main className={css.main}>
      <ul className={css.gallery}>
        {items.map(item => (
          <li key={item.id} className={css.galleryItem}>
            <ImageCard item={item} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ImageGallery;
