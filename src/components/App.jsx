import React, { Component } from 'react';
import { Triangle } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { getImages } from './servises/API';
import { GlobalStyle } from './GlobalStyled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import LoadMoreBtn from './Button/Button';
import Loader from './Loader';
import Notify from './Notify';

import Modal from './Modal';

class App extends Component {
  state = {
    images: [],
    totalHits: '',
    searchQuery: '',
    page: 1,
    modalShow: false,
    modalImage: '',
    modalTags: '',
    loading: false,
    showLoadMore: false,
  };

  getData = data => {
    this.setState({ searchQuery: data.query, page: 1, images: [] });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    try {
      if (
        prevState.searchQuery !== this.state.searchQuery ||
        prevState.page !== this.state.page
      ) {
        this.setState({ loading: true });
        const results = await getImages(searchQuery, page);
        this.setState(prev => ({
          images: [...prev.images, ...results.hits],
          totalHits: results.total,
        }));

        this.setState({ loading: false });
      }
    } catch (error) {
      Notify.error('Something went wrong');
    }
  }

  toggleModal = () => {
    this.setState(state => ({ modalShow: !this.state.modalShow }));
  };

  openModalImg = (url, alt) => {
    console.log(url);
    console.log(alt);

    this.setState({
      modalImage: url,
      modalTags: alt,
    });
    this.toggleModal();
  };
  getPage = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const {
      images,
      modalShow,
      modalImage,
      modalTags,
      loading,
      totalHits,
      searchQuery,
    } = this.state;

    return (
      <>
        <GlobalStyle />
        <Searchbar onSubmit={this.getData} />
        {loading && (
          <Loader>
            <Triangle ariaLabel="loading-indicator" />
          </Loader>
        )}
        <ImageGallery images={images} onClick={this.openModalImg} />
        {totalHits !== images.length && images.length !== 0 && (
          <LoadMoreBtn onClick={this.getPage} />
        )}
        {searchQuery !== '' && (
          <Notify total={totalHits} length={images.length} />
        )}
        {modalShow && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt={modalTags} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
