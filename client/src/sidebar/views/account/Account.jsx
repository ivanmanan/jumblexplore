import React, { Component } from 'react';

import Place from './Place';

const central_button = "text-center col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4"

class Account extends Component {

  render() {
    return (
      <div className="Account">

        <div className="Profile row">
          <div className="Avatar text-right
            col-md-3 col-md-offset-3
            col-sm-2 col-sm-offset-3
            col-xs-2 col-xs-offset-3">
            <img src="/avatar.png" alt="Profile"
                 id="Profile-Picture"/>
          </div>

          <div className="text-left
            col-md-6
            col-sm-6
            col-xs-6">
            <h1>{this.props.username}</h1>
          </div>
        </div>

        <Place central_button={central_button}
               username={this.props.username}
               user_id={this.props.user_id}
               insertLat={this.props.insertLat}
               insertLon={this.props.insertLon}
               insertPlace={this.props.insertPlace}
               default_place_query={this.props.default_place_query}
               displaySavedPlaces={this.props.displaySavedPlaces}/>

        <div className="row">
          <div className={central_button}>
            <button className="multiuse-button"
                    onClick={this.props.logout}>
              <p>Logout</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
