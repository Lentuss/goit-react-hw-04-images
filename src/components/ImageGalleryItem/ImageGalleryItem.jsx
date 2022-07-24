import React, { Component } from 'react';
import { ImgItem, Img } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { src, alt, largeImg, onClick } = this.props;
    return (
      <ImgItem>
        <Img onClick={() => onClick(largeImg, alt)} src={src} alt={alt}></Img>
      </ImgItem>
    );
  }
}

export default ImageGalleryItem;
