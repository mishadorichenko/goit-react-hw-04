import css from './PhotosGallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

function PhotosGallery({ items, onImageClick }) {
  return (
    <main className={css.main}>
      <ul className={css.gallery}>
        {items.map(item => (
          <li key={item.id} className={css.galleryItem}>
            <PhotoCard item={item} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default PhotosGallery;
