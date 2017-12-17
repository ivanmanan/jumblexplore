import React, { Component } from 'react';


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
          <h2>Render login here.</h2>
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