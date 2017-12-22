import React, { Component } from 'react';
import Login from './Login';
import Profile from './Profile';
import Album from './Album';
import Register from './Register';

class View extends Component {

  getView() {
    switch(this.props.viewSelection) {
      case "profile":
        return (
          <Profile logout={this.props.logout} username={this.props.username}/>
        );
      case "album":
        return (
          <Album logout={this.props.logout} username={this.props.username}/>
        );
      case "register":
        return (
          <Register logout={this.props.logout} login={this.props.login}/>
        );
      case "login":
      default:
        return (
          <Login login={this.props.login} register={this.props.register}/>
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