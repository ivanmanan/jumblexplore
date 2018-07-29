import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, ZoomControl } from './leaflet';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 34.0407,
      lng: -118.2468,
      zoom: 6,
    };
  }

  render() {

    const sample_position = [this.state.lat, this.state.lng]
    return (
      <div className="Maps-container">
        <Map center={sample_position} zoom={this.state.zoom} zoomControl={false} minZoom={3} maxZoom={14} worldCopyJump={true}>

          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            noWrap={false}
          />
          <ZoomControl position="topright"/>

          {/* Temporary content below */}
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