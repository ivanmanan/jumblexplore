import React, { Component } from 'react';

const place_field_label = "text-right col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1 col-xs-4 col-xs-offset-1";
const place_field_input = "Place-Field-Input text-left col-md-6 col-sm-6 col-xs-6"

class Place extends Component {
  constructor(props) {
    super(props);
    this.updatePlace = this.updatePlace.bind(this);
    this.deletePlace = this.deletePlace.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCaptionChange = this.handleCaptionChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      editDate: this.props.editDate,
      editCaption: this.props.editCaption
    });
    console.log(this.props.editDate);
  }

  handleDateChange(e) {
    this.props.updateDate(e.target.value);
  }

  handleCaptionChange(e) {
    this.props.updateCaption(e.target.value);
  }

  updatePlace(e) {
    e.preventDefault();
    if (this.refs.new_place.value !== this.props.default_place_query) {
      // Submit PUT request
      fetch('/place', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
          username: this.props.username,
          user_id: this.props.user_id,
          place_id: this.props.editPlace_id,
          date: this.refs.new_date.value,
          caption: this.refs.new_caption.value
        })
      })
        .then(() => {
          // Re-render the map with new saved places
          this.props.displaySavedPlaces();

          // TODO: Call a function that sorts places by date and
          //       draws a line between markers chronological
        });

    }
    else {
      // TODO: Flash red error message saying place must be
      // selected from the map
      console.log("Must search for a place in the map!");
    }
  }

  deletePlace(e) {
    e.preventDefault();
    if (this.refs.new_place.value !== this.props.default_place_query) {
      // Submit DELETE request
      fetch('/place', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({
          username: this.props.username,
          user_id: this.props.user_id,
          place_id: this.props.editPlace_id
        })
      })
        .then(() => {
          // Set Date/Caption/Query to default or empty
          this.props.clearPlace();

          // Re-render the map without deleted place
          this.props.displaySavedPlaces();
        });
    }
  }

  render() {
    return (
      <div className="Place">
        <form onSubmit={this.updatePlace}>

          <div className="Place-Field row">
            <div className={place_field_label}>
              <h4>Place</h4>
            </div>
            <div className={place_field_input}>

              <input type="search" ref="new_place" required
                     id="Search-Place" readOnly
                     value={this.props.editPlace}/>
            </div>
          </div>

          <div className="Place-Field row">
            <div className={place_field_label}>
              <h4>Date</h4>
            </div>
            <div className={place_field_input}>
              <input type="date" ref="new_date"
                     value={this.props.editDate}
                     onChange={this.handleDateChange}/>
            </div>
          </div>

          <div className="Place-Field row">
            <div className={place_field_label}>
              <h4>Caption</h4>
            </div>
            <div className={place_field_input}>
              <textarea id="New-Details" ref="new_caption" rows={2}
                        maxLength={144}
                        onChange={this.handleCaptionChange}
                        value={this.props.editCaption}/>
            </div>
          </div>

          <div className="row">
            <div className={this.props.central_button}>
              <button className="multiuse-button">
                <p>Update Place</p>
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className={this.props.central_button}>
            <button className="multiuse-button"
                    onClick={this.deletePlace}>
              <p>Delete Place</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Place;
