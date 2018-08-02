import React, { Component } from 'react';

import Account from './views/account/Account';
import Register from './views/Register';
import Login from './views/Login';

// Global Variables
// Use these for Register and Login components
const field_label = "text-right col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1 col-xs-3 col-xs-offset-1";
const field_input = "text-left col-md-7 col-sm-7 col-xs-7";
const button_box = "text-center col-md-5 col-md-offset-5 col-sm-3 col-sm-offset-6 col-xs-3 col-xs-offset-6";

class View extends Component {
  constructor(props) {
    super(props);
    this.getView = this.getView.bind(this);
  }

  getView() {
    switch(this.props.view) {
      case "account":
        return (
          <Account username={this.props.username}
                   logout={this.props.logout}
                   button_box={button_box}
                   user_id={this.props.user_id}
                   insertLat={this.props.insertLat}
                   insertLon={this.props.insertLon}
                   insertPlace={this.props.insertPlace}
                   default_place_query={this.props.default_place_query}/>
        );
      case "register":
        return (
          <Register logout={this.props.logout}
                    login={this.props.login}
                    field_label={field_label}
                    field_input={field_input}
                    button_box={button_box}/>
        );
      case "login":
      default:
        return (
          <Login login={this.props.login}
                 register={this.props.register}
                 field_label={field_label}
                 field_input={field_input}
                 button_box={button_box}/>
        );
    }
  }

  render() {
    return (
      <div className="View">
        {this.getView()}
      </div>
    );
  }
}

export default View;