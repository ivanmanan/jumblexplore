import React, { Component } from 'react';

// Change username to First and Last name
class Logout extends Component {

  render() {
    return (
      <div className="Logout row">
        <div className="username-display text-center
          col-md-4 col-md-offset-2
          col-sm-4 col-sm-offset-2
          col-xs-4 col-xs-offset-2">
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