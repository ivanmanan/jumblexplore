import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, ZoomControl } from './leaflet';

// TODO: be able to select the pop-up and change the App.jsx state for selected place, which goes back to insert new place

class Maps extends Component {
  constructor(props) {
    super(props);
    this.displayPlacesSearched = this.displayPlacesSearched.bind(this);
    this.displayPlacesSaved = this.displayPlacesSaved.bind(this);
    this.potentialPlaceSave = this.potentialPlaceSave.bind(this);
    this.loggedInUser = this.loggedInUser.bind(this);
  }

  potentialPlaceSave(place) {
    console.log(place);
  }

  loggedInUser(place) {
    // If logged in, return "Insert Place" button
    if (sessionStorage.getItem('loggedIn')) {
      return (
        <button id="insert-place-button"
                onClick={() => this.potentialPlaceSave(place)}>
          <p>Insert Place</p>
        </button>
      );
    }
  }

  // Return Marker components of all possible addresses
  displayPlacesSearched() {
    if (this.props.placeSearch) {
      const placeSearch = this.props.placeSearch;

      return placeSearch.map((place, id) => (
        <Marker key={id} position={[place.y, place.x]}>
          <Popup>
            <span>
              {place.label}

              <div className="text-center">
                {this.loggedInUser(place)}
              </div>

            </span>
          </Popup>
        </Marker>
      ));
    }
  }

  // Queried from database
  // TODO: Redraw database schema
  displayPlacesSaved() {
    console.log("Does not reveal places saved yet!");
  }

  render() {
    return (
      <div className="Maps-container">
        <Map center={this.props.mapFocus} zoom={this.props.mapZoom} zoomControl={false} minZoom={2} maxZoom={14} worldCopyJump={true}>

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