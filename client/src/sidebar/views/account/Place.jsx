import React, { Component } from 'react';

const place_field_label = "text-right col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1 col-xs-4 col-xs-offset-1";
const place_field_input = "Place-Field-Input text-left col-md-6 col-sm-6 col-xs-6"

class Place extends Component {
  constructor(props) {
    super(props);
    this.insertPlace = this.insertPlace.bind(this);
  }

  insertPlace(e) {
    e.preventDefault();

    if (this.refs.new_place.value !== this.props.default_place_query) {
      fetch('/place', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          username: this.props.username,
          user_id: this.props.user_id,
          place: this.refs.new_place.value,
          latitude: this.props.insertLat,
          longitude: this.props.insertLon,
          date: this.refs.new_date.value,
          caption: this.refs.new_caption.value
        })
      })
        .then((data) => {
          // Clear map and display all of user's saved places
          this.props.displaySavedPlaces();
        });
    }
    else {
      // TODO: Flash red error message saying place must be
      // selected from the map
      console.log("Must search for a place in the map!");
    }
  }

  render() {
    return (
      <div className="Place">
        <form onSubmit={this.insertPlace}>

          <div className="Place-Field row">
            <div className={place_field_label}>
              <h4>New Place</h4>
            </div>
            <div className={place_field_input}>

              <input type="search" ref="new_place" required
                     id="Search-Place" readOnly
                     value={this.props.insertPlace}/>
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
              <textarea id="New-Details" ref="new_caption" rows={2}
                        maxLength={144}/>
            </div>
          </div>

          <div className="row">
            <div className={this.props.central_button}>
              <button className="multiuse-button">
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
