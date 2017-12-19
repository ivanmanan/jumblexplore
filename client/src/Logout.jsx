import React, { Component } from 'react';

// Change username to First and Last name
class Logout extends Component {

  render() {
    return (
      <div className="Logout row">
        <div className="Avatar text-right
          col-md-1 col-md-offset-1
          col-sm-1 col-sm-offset-1
          col-xs-1 col-xs-offset-1">
          <img src="/avatar.png" alt="Profile" className="Profile-Picture"/>
        </div>
        <div className="username-display text-center
          col-md-4
          col-sm-4
          col-xs-4">
          <button>
            <h5>{this.props.username}</h5>
          </button>
        </div>
        <div className="logout text-center
          col-md-4
          col-sm-4
          col-xs-4">
          <button onClick={this.props.logout}>
            <h5>Logout</h5>
          </button>
        </div>
      </div>
    );
  }
}

export default Logout;