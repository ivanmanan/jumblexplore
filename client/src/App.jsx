import React, { Component } from 'react';
import Fixed from './Fixed';
import Dynamic from './Dynamic';

// Initial component must be a login screen

class App extends Component {

  // Constructor to pass props to Fixed, Dynamic, and Maps components
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userSearched: ''
    };
  }

  render() {
    return (
      <div className="App">

        <div className="Panel row">
          <div className="
            col-md-4
            col-sm-5
            col-xs-5">
            <Fixed/>
          </div>

          <div className="
            col-md-8
            col-sm-7
            col-xs-7">
            <Dynamic/>
          </div>
        </div>

        <div className="Maps row">
          <div className="Map
            col-md-12
            col-sm-12
            col-xs-12">
            <h1>Map</h1>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
