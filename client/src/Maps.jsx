import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, ZoomControl } from './leaflet';

// TODO: Need to test if you search for a place you already saved...
//       so what would exactly happen? Potential bug!

class Maps extends Component {
  constructor(props) {
    super(props);
    this.displayPlacesSearched = this.displayPlacesSearched.bind(this);
    this.displayPlacesSaved = this.displayPlacesSaved.bind(this);
    this.savePlace = this.savePlace.bind(this);
    this.loggedInUser = this.loggedInUser.bind(this);
  }

  savePlace(place) {
    // Submit POST request
    fetch('/place', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.props.username,
        user_id: this.props.user_id,
        place: place.label,
        latitude: place.y,
        longitude: place.x,
        date: '',
        caption: ''
      })
    })
      .then(res => res.json())
      .then((place_id) => {
        // Clear map and display all of user's saved places
        this.props.placeSearch("");
        this.props.displaySavedPlaces();

        // Goes back to parent component App.jsx
        // Saves place for Place.jsx to edit Place value
        this.props.editPlace(place, place_id);

        // TODO: Change button to "update Place" and display
        // sidebar collapsible when clicked
      });
  }

  loggedInUser(place) {
    // If logged in, return "Insert Place" button
    if (sessionStorage.getItem('loggedIn')) {
      return (
        <button id="insert-place-button"
                onClick={() => this.savePlace(place)}>
          <p>Insert Place</p>
        </button>
      );
    }
  }

  // Return Marker components of all possible addresses
  displayPlacesSearched() {
    if (this.props.search) {

      const redMarker = L.ExtraMarkers.icon({
        icon: 'fa-coffee',
        markerColor: 'red',
        shape: 'square',
        prefix: 'fa'
      });


      const search = this.props.search;
      return search.map((place, id) => (
        <Marker key={id} position={[place.y, place.x]} icon={redMarker}>
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
  // Retrieved from App.jsx
  displayPlacesSaved() {
    if (this.props.places.length !== 0) {
      const places = this.props.places;
      return places.map((place, id) => (
        <Marker key={id} position={[place.Latitude, place.Longitude]}>
          <Popup>
            <span>
              {place.place}
              <div className="text-center">
                <p>
                  {place.Date_Record}
                  <br/>
                  {place.Caption}
                </p>
              </div>
            </span>
          </Popup>
        </Marker>
      ));
    }
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