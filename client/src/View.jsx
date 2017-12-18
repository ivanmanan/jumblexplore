import React, { Component } from 'react';
import Login from './Login';
import Profile from './Profile';
import Album from './Album';

class View extends Component {

  getView() {
    switch(this.props.viewSelection) {
      case "profile":
        return (
          <Profile logout={this.props.logout} username={this.props.username}/>
        );
      case "photos":
        return (
          <Album logout={this.props.logout} username={this.props.username}/>
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