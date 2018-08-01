import React, { Component } from 'react';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

//import SearchPlace from './SearchPlace';


const place_field_label = "text-right col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1 col-xs-4 col-xs-offset-1";
const place_field_input = "Place-Field-Input text-left col-md-6 col-sm-6 col-xs-6"

class Place extends Component {
  constructor(props) {
    super(props);
    this.insertPlace = this.insertPlace.bind(this);
  }

  insertPlace(e) {
    e.preventDefault();

    console.log(this.refs.new_place.value);
    /* console.log(this.refs.new_date.value);
     * console.log(this.refs.new_caption.value);*/

    const provider = new OpenStreetMapProvider();
    provider.search({ query: this.refs.new_place.value })
            .then((addresses) => {
              this.props.placeSearch(addresses);
            });
  }

  // TODO: First must locate the place on the map,
  // this must be done by pop-up displaying all the places
  // Moreover, the place must be selected from the list!!

  // User must select pop-up from the map
  // This pop-up will populate the input query
  // do not submit form unless input value is proper address
  // automove map to first pop-up

  render() {
    return (
      <div className="Place">
        <form onSubmit={this.insertPlace}>

          <div className="Place-Field row">
            <div className={place_field_label}>
              <h4>New Place</h4>
            </div>
            <div className={place_field_input}>

              <input type="search" ref="new_place" required/>




            </div>
          </div>

          <div className="Place-Field row">
            <div className={place_field_label}>
              <h4>Date</h4>
            </div>
            <div className={place_field_input}>
              <input type="date" ref="new_date"/>
            </div>
          </div>

          <div className="Place-Field row">
            <div className={place_field_label}>
              <h4>Caption</h4>
            </div>
            <div className={place_field_input}>
              <textarea id="New-Details" ref="new_caption"/>
            </div>
          </div>

          <div className="row">
            <div className={this.props.central_button}>
              <button className="multiuse-button"
                      id="insert-place-button">
                <p>Insert Place</p>
              </button>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default Place;
