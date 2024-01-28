import React, { Component } from 'react';
import PixabayApi from './PixabayApi';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };

    this.pixabayApi = new PixabayApi();
  }

  handleSearch = async (event) => {
    event.preventDefault();

    const searchQuery = event.target.elements.searchQuery.value;
    if (!searchQuery) {
      return;
    }

    try {
      const response = await this.pixabayApi.getImages(searchQuery, this.pixabayApi.queryPage);
      const newImages = response.hits.map((hit) => ({
        id: hit.id,
        imageUrl: hit.webformatURL,
        alt: hit.tags,
      }));

      this.setState({ images: newImages });
      this.pixabayApi.incrementPage();

      // Update the state in the App component
      this.props.setSearchedImages(newImages);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  render() {
    return (
        <div className="search-box">
          <span className="logo-name" onClick={() => window.location.reload()}>
            Image Seeker
          </span>
          <form className="search-form" id="search-form" onSubmit={this.handleSearch}>
            <input
              type="text"
              name="searchQuery"
              autoComplete="off"
              placeholder="Search images..."
            />
            <button className="search-form-button" type="submit">
              &#128269;
            </button>
          </form>
        </div>
    );
  }
}

export default Searchbar;
