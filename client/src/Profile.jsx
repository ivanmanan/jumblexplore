import React, { Component } from 'react';
import Logout from './Logout';
import Settings from './Settings';
import Tools from './Tools';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: ""
    };
    this.renderSelection = this.renderSelection.bind(this);
    this.settingsSelected = this.settingsSelected.bind(this);
    this.mapSelected = this.mapSelected.bind(this);
  };

  settingsSelected() {
    this.setState({
      view: "settings"
    });
  }

  mapSelected(e) {
    this.setState({
      view: "map"
    });
  }

  renderSelection() {
    switch(this.state.view) {
      case "settings":
      return (
        <Settings/>
      );

      case "map":
      default:
        return (
          <Tools/>
        );
    }
  }


  render() {
    return (
      <div>
        <Logout logout={this.props.logout} username={this.props.username}/>
        <div className="row">
          <div className="text-left
            col-md-2 col-md-offset-3
            col-sm-3 col-sm-offset-3
            col-xs-4 col-xs-offset-2">
            <div className="Profile row" id="extra-padding">
              <h2><a onClick={this.settingsSelected}>Settings</a></h2>
            </div>
            <div className="Profile row">
              <h2><a onClick={this.mapSelected}>My Map</a></h2>
            </div>
          </div>
          <div className="text-left
            col-md-4 col-md-offset-1
            col-sm-5
            col-xs-4" id="extra-padding">
            {this.renderSelection()}
          </div>
          </div>
        </div>
    );
  }
}

export default Profile;