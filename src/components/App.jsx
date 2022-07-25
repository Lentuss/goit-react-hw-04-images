import React, { useState, useEffect } from 'react';
import { Triangle } from 'react-loader-spinner';

import { getImages } from '../servises/API';
import { GlobalStyle } from './GlobalStyled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import LoadMoreBtn from './Button/Button';
import Loader from './Loader';
import Notify from './Notify';

import Modal from './Modal';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalHits, setTotalHits] = useState('');
  const [page, setPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTags, setModalTags] = useState('');
  const [loading, setLoading] = useState(false);

  const getData = query => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    const getImageData = async (searchQuery, page) => {
      setLoading(true);
      try {
        const results = await getImages(searchQuery, page);
        setImages([...images, ...results.hits]);
        setTotalHits(results.total);
      } catch (error) {
        Notify.error('Something went wrong');
      }
      setLoading(false);
    };

    if (searchQuery !== '') {
      getImageData(searchQuery, page);
    }
  }, [searchQuery, page, images]);

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const openModalImg = (url, alt) => {
    setModalImage(url);
    setModalTags(alt);
    toggleModal();
  };

  const getPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <GlobalStyle />
      <Searchbar onSubmit={getData} />
      {loading && (
        <Loader>
          <Triangle ariaLabel="loading-indicator" />
        </Loader>
      )}
      <ImageGallery images={images} onClick={openModalImg} />
      {totalHits !== images.length && images.length !== 0 && (
        <LoadMoreBtn onClick={getPage} />
      )}
      {searchQuery !== '' && (
        <Notify total={totalHits} length={images.length} />
      )}
      {modalShow && (
        <Modal onClose={toggleModal}>
          <img src={modalImage} alt={modalTags} />
        </Modal>
      )}
    </>
  );
};

export default App;
