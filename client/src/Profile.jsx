import React, { Component } from 'react';
import Logout from './Logout';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: "settings"
    }
    this.renderSelection = this.renderSelection.bind(this);
    this.settingsSelected = this.settingsSelected.bind(this);
    this.mapSelected = this.mapSelected.bind(this);
  };

  settingsSelected() {
    this.setState({
      view: "settings"
    });
  }

  mapSelected() {
    this.setState({
      view: "map"
    });
  }

  renderSelection() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }


  render() {
    return (
      <div>
        <Logout logout={this.props.logout} username={this.props.username}/>
        <div className="row">
          <div className="text-left
            col-md-1 col-md-offset-1
            col-sm-2 col-sm-offset-1
            col-xs-3 col-xs-offset-1">
            <img src="/avatar.png" alt="Profile" class="Profile-Picture"/>
          </div>
          <div className="text-left
            col-md-2
            col-sm-3 col-sm-offset-1
            col-xs-4">
            <div className="Profile row" id="extra-padding">
              <h2><a onClick={this.settingsSelected()}>Settings</a></h2>
            </div>
            <div className="Profile row">
              <h2><a onClick={this.mapSelected()}>My Map</a></h2>
            </div>
          </div>
          <div className="text-left
            col-md-5 col-md-offset-1
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