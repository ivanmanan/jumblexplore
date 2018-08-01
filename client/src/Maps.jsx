import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, ZoomControl } from './leaflet';

// TODO: be able to select the pop-up and change the App.jsx state for selected place, which goes back to insert new place

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 2
    };
    this.displayPlacesSearched = this.displayPlacesSearched.bind(this);
    this.displayPlacesSaved = this.displayPlacesSaved.bind(this);
  }

  // Return Marker components of all possible addresses
  // This will need to be mapped
  displayPlacesSearched() {
    if (this.props.placeSearch) {
      const placeSearch = this.props.placeSearch;
      console.log(placeSearch);


      return placeSearch.map((place, id) => (
        <Marker key={id} position={[place.y, place.x]}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      ));
    }
  }

  // Queried from database
  // TODO: Redraw database schema
  displayPlacesSaved() {
    console.log("This does nothing right now!");
  }

  render() {
    return (
      <div className="Maps-container">
        <Map center={this.props.mapFocus} zoom={this.state.zoom} zoomControl={false} minZoom={2} maxZoom={14} worldCopyJump={true}>

          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            noWrap={false}
          />
          <ZoomControl position="topright"/>

          <div>
            {this.displayPlacesSearched()}
          </div>
          <div>
            {this.displayPlacesSaved()}
          </div>

        </Map>
      </div>
    );
  }
}

export default Maps;