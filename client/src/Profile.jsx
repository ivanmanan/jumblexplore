import React, { Component } from 'react';
import Logout from './Logout';


class Profile extends Component {




  render() {
    return (
      <div>
        <Logout logout={this.props.logout} username={this.props.username}/>
        <div className="row">
          <h2>Render profile here.</h2>
        </div>
      </div>
    );
  }
}

export default Profile;