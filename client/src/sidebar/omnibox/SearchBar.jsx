import React, { Component } from 'react';

import { OpenStreetMapProvider } from 'leaflet-geosearch';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleUserSearch = this.handleUserSearch.bind(this);
    this.handlePlaceSearch = this.handlePlaceSearch.bind(this);
  }

  handlePlaceSearch(e) {
    e.preventDefault();

    const provider = new OpenStreetMapProvider();
    provider.search({ query: this.refs.new_place.value })
            .then((addresses) => {
              this.props.placeSearch(addresses);
            });
  }

  handleUserSearch(e) {
    e.preventDefault();

    // Repeat same success at Place search
    console.log("Do nothing");
  }


  // TODO: values will change to prop depending on Place
  // or User is being searched

  render() {
    return (
      <div>
        <form onSubmit={this.handlePlaceSearch}>
          <input
            id="SearchBar"
            type="search"
            ref="new_place"
            placeholder={this.props.placeholder}
            value={this.props.username}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;