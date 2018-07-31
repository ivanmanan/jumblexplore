import React, { Component } from 'react';

import Account from './Account';
import Register from './Register';
import Login from './Login';

class View extends Component {
  constructor(props) {
    super(props);

    this.getView = this.getView.bind(this);
  }

  getView() {
    switch(this.props.viewSelection) {
      case "account":
        return (
          <Account/>
        );
      case "register":
        return (
          <Register/>
        );
      case "login":
      default:
        return (
          <Login/>
        );
    }
  }

  render() {
    return (
      <div className="View">
        {this.getView()}
      </div>
    );
  }
}

export default View;