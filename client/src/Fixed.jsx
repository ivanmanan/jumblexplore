import React, { Component } from 'react';


class Fixed extends Component {

  // on click of home icon show profile setting

  render() {
    return (
      <div className="Fixed">
        <div className="Title row">
          <div className="text-center
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
          <div className="searchBar text-left
            col-md-7
            col-sm-7
            col-xs-7">
            <form>
              <input type="text"
                     placeholder="Search..."/>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Fixed;