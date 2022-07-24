import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <Gallery>
      {images.map(img => (
        <li key={img.id}>
          <ImageGalleryItem
            src={img.webformatURL}
            alt={img.tags}
            onClick={onClick}
            largeImg={img.largeImageURL}
          />
        </li>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(object),
  onClick: PropTypes.func,
};

export default ImageGallery;
