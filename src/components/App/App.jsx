import { Component } from 'react';
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

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    loading: false,
    loadMoreBtn: true,
    isModalOpen: false,
    modalImgURL: '',
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const { hits } = await fetchImages(
          this.state.searchQuery,
          this.state.page
        );

        if (hits.length === 0) {
          return Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.',
            paramsNotify
          );
        }

        this.setState({
          images: this.state.page === 1 ? hits : [...prevState.images, ...hits],
        });
      } catch (error) {
        Notify.failure(
          'Oops, something went wrong.Try to refresh this page or make another search.',
          paramsNotify
        );
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchQuery.value;

    if (searchValue === '') {
      Notify.warning('Enter your search query, please!', paramsNotify);
      return;
    }

    if (searchValue === this.state.searchQuery) {
      Notify.warning('Enter a new search query, please!', paramsNotify);
      event.currentTarget.reset();
      return;
    }

    this.setState({
      searchQuery: searchValue,
      page: 1,
      loading: true,
    });
    event.currentTarget.reset();
  };

  incrementPage = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onImageClick = url => {
    this.setState({ modalImgURL: url, isModalOpen: true });
  };

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { loading, images, isModalOpen, modalImgURL } = this.state;
    console.log(this.state);
    return (
      <AppSection>
        <SearchBar handleSubmit={this.handleSubmit}></SearchBar>
        {loading && <Loader />}

        <ImageGallery
          images={images}
          onImageClick={this.onImageClick}
        ></ImageGallery>

        {images.length > 0 && (
          <LoadMoreButton incrementPage={this.incrementPage}></LoadMoreButton>
        )}

        {isModalOpen && (
          <Modal
            modalImgURL={modalImgURL}
            onCloseModal={this.onCloseModal}
            isModalOpen={isModalOpen}
          />
        )}
      </AppSection>
    );
  }
}
