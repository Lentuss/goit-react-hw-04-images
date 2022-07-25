import { ImgItem, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, largeImg, onClick }) => {
  return (
    <ImgItem>
      <Img onClick={() => onClick(largeImg, alt)} src={src} alt={alt}></Img>
    </ImgItem>
  );
};

export default ImageGalleryItem;
