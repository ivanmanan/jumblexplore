import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from './leaflet';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 34.0407,
      lng: -118.2468,
      zoom: 13,
    };
  }

  render() {

    const sample_position = [this.state.lat, this.state.lng]
    return (
      <div className="Maps-container">
        <Map center={sample_position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={sample_position}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default Maps;