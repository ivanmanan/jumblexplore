import React, { Component } from 'react';

import { OpenStreetMapProvider } from 'leaflet-geosearch';


class Search extends Component {
  constructor(props) {
    super(props);
    this.leafletSearch = this.leafletSearch.bind(this);
  }

  leafletSearch() {
    const provider = new OpenStreetMapProvider();
    const results = provider.search({ query: this.refs.place.value });

    console.log(results);
  }

  render() {
    return (
      <div className="SearchPlace">
        <input type="text" ref="place" required/>
      </div>
    );
  }
}

export default Search;
