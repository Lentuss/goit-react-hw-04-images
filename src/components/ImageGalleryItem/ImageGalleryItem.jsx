import { ImgItem, Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, largeImg, onClick }) => {
  return (
    <ImgItem>
      <Img onClick={() => onClick(largeImg, alt)} src={src} alt={alt}></Img>
    </ImgItem>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
