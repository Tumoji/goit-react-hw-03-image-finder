import React from 'react';

const ImageGalleryItem = ({ id, imageUrl, alt }) => (
  <li className="ImageGalleryItem" key={id}>
    <img src={imageUrl} alt={alt} className='ImageGalleryItem-image' />
  </li>
);

export default ImageGalleryItem;
