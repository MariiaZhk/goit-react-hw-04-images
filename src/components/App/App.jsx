import { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { fetchImages } from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton';
import { AppSection } from './App.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Modal } from 'components/Modal/Modal';

const paramsNotify = {
  width: '600px',
  position: 'center-center',
  fontSize: '36px',
};

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [loadMoreBtn, setLoadMoreBtn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgURL, setModalImgURL] = useState('');

  useEffect(() => {
    async function getPhotos() {
      try {
        setLoading(true);
        const { hits } = await fetchImages(searchQuery, page);
        page === 1
          ? setImages(hits)
          : setImages(prevState => [...prevState, ...hits]);

        if (hits.length === 0) {
          return Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.',
            paramsNotify
          );
        }
      } catch (error) {
        Notify.failure(
          'Oops, something went wrong.Try to refresh this page or make another search.',
          paramsNotify
        );
      } finally {
        setLoading(false);
      }
    }
    if (searchQuery) {
      getPhotos();
    }
  }, [searchQuery, page]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchQuery.value;

    if (searchValue === '') {
      Notify.warning('Enter your search query, please!', paramsNotify);
      return;
    }

    if (searchValue === searchQuery) {
      Notify.warning('Enter a new search query, please!', paramsNotify);
      event.currentTarget.reset();
      return;
    }

    setSearchQuery(searchValue);
    setPage(1);
    setLoading(true);
    event.currentTarget.reset();
  };

  const incrementPage = async () => {
    setPage(prevState => prevState + 1);
  };

  const onImageClick = url => {
    setModalImgURL(url);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppSection>
      <SearchBar handleSubmit={handleSubmit}></SearchBar>
      {loading && <Loader />}

      <ImageGallery images={images} onImageClick={onImageClick}></ImageGallery>

      {images.length > 0 && (
        <LoadMoreButton incrementPage={incrementPage}></LoadMoreButton>
      )}

      {isModalOpen && (
        <Modal
          modalImgURL={modalImgURL}
          onCloseModal={onCloseModal}
          isModalOpen={isModalOpen}
        />
      )}
    </AppSection>
  );
};
