import './App.css';
import { useEffect, useState } from 'react';
import PhotosGallery from '../PhotosGallery/PhotosGallery';
import SearchBar from '../SearchBar/SearchBar';
import { getPhotos } from '../../photos-api';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMore from '../LoadMore/LoadMore';
import UserMessage from '../UserMessage/UserMessage';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    modalImgUrl: '',
    altDescription: '',
  });

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }
    async function fetchPhotos() {
      try {
        setIsError(false);
        setIsLoading(true);
        setUserMessage('');

        const { results, total_pages } = await getPhotos(page, searchQuery);

        if (total_pages == 0) {
          setUserMessage(
            'There are no images or photos that match your query.'
          );
          setShowBtn(false);
          setPhotos([]);
          return;
        }

        setPhotos(prevState => [...prevState, ...results]);
        setShowBtn(total_pages && total_pages !== page);
        if (total_pages <= page) {
          setUserMessage('You have reached the end of the list.');
        }
      } catch {
        setIsError(true);
        setSearchQuery('');
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotos();
  }, [page, searchQuery]);

  const handleSearch = async topic => {
    setSearchQuery(topic);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  function openModal(modalImgUrl, altDescription) {
    setSelectedImage({ modalImgUrl, altDescription });
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedImage({ modalImgUrl: '', altDescription: '' });
    setIsOpen(false);
  }

  // ============= without pagination =================
  // const onSearch = async (page, searchQuery) => {
  //   try {
  //     setIsLoading(true);
  //     setPhotos([]);
  //     const photos = await getPhotos(page, searchQuery);
  //     setPhotos(photos);
  //   } catch {
  //     setIsError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <>
      {/* <SearchBar onSearch={onSearch} /> */}
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && (
        <PhotosGallery items={photos} onImageClick={openModal} />
      )}
      <Loader isLoading={isLoading} />
      {isError && <ErrorMessage />}
      {showBtn && !isLoading && <LoadMore onClick={handleLoadMore} />}
      {userMessage && <UserMessage message={userMessage} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalImgUrl={selectedImage.modalImgUrl}
        altDescription={selectedImage.altDescription}
      />
    </>
  );
}

export default App;
