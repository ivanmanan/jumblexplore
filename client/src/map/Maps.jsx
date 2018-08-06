import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, ZoomControl, Polyline } from './react-leaflet';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.displayPlacesSearched = this.displayPlacesSearched.bind(this);
    this.displayPlacesSaved = this.displayPlacesSaved.bind(this);
    this.displayPath = this.displayPath.bind(this);
    this.savePlace = this.savePlace.bind(this);
    this.updatePlace = this.updatePlace.bind(this);
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
        this.props.editPlace(place.label, place_id, '', '');
      });
  }

  updatePlace(place) {
    this.props.editPlace(place.Place, place.Place_ID, place.Date_Record, place.Caption);
  }

  loggedInUser(place) {
    // If logged in, return "Insert Place" button
    if (sessionStorage.getItem('loggedIn')) {
      return (
        <button id="place-button"
                onClick={() => this.savePlace(place)}>
          <p>Insert Place</p>
        </button>
      );
    }
  }

  // Return Marker components of all possible addresses
  displayPlacesSearched() {
    if (this.props.search) {
      const search = this.props.search;
      return search.map((place, id) => (
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
  // Retrieved from App.jsx
  displayPlacesSaved() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    const places = this.props.places;
    return places.map((place, id) => (
      <Marker key={id} position={[place.Latitude, place.Longitude]}>
        <Popup>
          <span>
            {place.Place}
            <div className="text-center">
              <p>
                {place.Date_Record}
                <br/>
                {place.Caption}
              </p>
              {loggedIn &&
                 <button id="place-button"
                         onClick={() => this.updatePlace(place)}>
                   <p>Update Place</p>
                 </button>
              }
            </div>
          </span>
        </Popup>
      </Marker>
    ));
  }

  displayPath() {
    const places = this.props.places;
    let places_with_dates = [];
    let polyline = [];
    places.forEach((place) => {
      if (place.Date_Record) {
        places_with_dates.push(place);
      }
    });

    // Sort places by dates
    let sorted_places = places_with_dates.sort((a, b) => new Date(b.Date_Record) - new Date(a.Date_Record)).reverse();

    if (sorted_places.length > 1 ) {
      sorted_places.forEach((place) => {
        polyline.push([place.Latitude, place.Longitude]);
      });
      return (
        <Polyline color="lime" positions={polyline}/>
      );
    }
    else {
      return (null);
    }
  }

  render() {
    return (
      <div className="Maps-container">
        <Map center={this.props.mapFocus} zoom={this.props.mapZoom} zoomControl={false} minZoom={2} maxZoom={14} worldCopyJump={true}>

          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            noWrap={false}/>
          <ZoomControl position="topright"/>

          <div>
            {this.displayPlacesSearched()}
          </div>
          <div>
            {this.displayPlacesSaved()}
          </div>
          <div>
            {this.displayPath()}
          </div>
        </Map>
      </div>
    );
  }
}

export default Maps;