import React, { Component } from 'react';
import Login from './Login';

class View extends Component {

  getView() {
    switch(this.props.viewSelection) {
      case "profile":
        return (
          <h2>Render profile here.</h2>
        );
      case "photos":
        return (
          <h2>Render user's photos here.</h2>
        );
      case "login":
      default:
        return (
          <Login login={this.props.login}/>
        );
    }
  }

  render() {
    return (
      <div className="View text-center">
        {this.getView()}
      </div>
    );
  }

}

export default View;