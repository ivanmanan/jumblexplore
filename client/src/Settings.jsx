import React, { Component } from 'react';

class Settings extends Component {
  /* constructor(props) {
   *   super(props);
   * }*/

  render() {
    return (
      <div className="Settings">
        <div className="row">
          <h2><a onClick={this.settingsSelected}>Change Picture</a></h2>
        </div>
        <div className="row">
          <h2><a onClick={this.settingsSelected}>Change Password</a></h2>
        </div>
        <div className="row">
          <h2><a onClick={this.settingsSelected}>Delete Account</a></h2>
        </div>
      </div>
    );
  }
}
export default Settings;