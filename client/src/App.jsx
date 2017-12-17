import React, { Component } from 'react';
import Navigation from './Navigation';
import View from './View';

// Initial component must be a login screen

class App extends Component {

  // Constructor to pass props to Navigation, View, and Maps components
  constructor(props) {
    super(props);
    this.state = {
      view: "login",
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
            <Navigation/>
          </div>

          <div className="
            col-md-8
            col-sm-7
            col-xs-7">
            <View viewSelection={this.state.view}/>
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
