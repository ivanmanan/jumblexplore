import React, { Component } from 'react';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  // Handle user search
  handleSubmit(e) {
    e.preventDefault();
    console.log("Searching for " + this.refs.userSearch.value);
  }

    // on click of home icon show profile setting



    render() {
    return (
      <div className="Navigation">
        <div className="Title row">
          <div className="Title text-center
            col-md-12
            col-sm-12
            col-xs-12">
            <h1>Travel Share</h1>
          </div>
          <div className="Icon text-center
            col-md-4 col-md-offset-1
            col-sm-4 col-sm-offset-1
            col-xs-4 col-xs-offset-1">
            <img id="home" src="/home.png" alt="Home"/>

          </div>
          <div className="search text-left
            col-md-7
            col-sm-7
            col-xs-7">
            <form onSubmit={this.onSubmit}>
              <input id="searchBar"
                     type="text"
                     placeholder="Search..."
                     ref="userSearch"/>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Navigation;