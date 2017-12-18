import React, { Component } from 'react';
import Logout from './Logout';

class Album extends Component {

  render() {
    return (
      <div className="Album">
        <Logout logout={this.props.logout} username={this.props.username}/>

        <div className="row">
          <h2>Render user's album here.</h2>
        </div>
      </div>
    );
  }
}

export default Album;