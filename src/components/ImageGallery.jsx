import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <div>
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} {...image} />
      ))}
    </ul>
  </div>
);

export default ImageGallery;
