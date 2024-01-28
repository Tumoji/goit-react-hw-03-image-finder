import React, { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import './styles.css';

export const App = () => {
  const [searchedImages, setSearchedImages] = useState([]);

  return (
    <section>
      <Searchbar setSearchedImages={setSearchedImages} />
      <ImageGallery images={searchedImages} />
      <button className="Button">hello</button>
    </section>
  );
};
