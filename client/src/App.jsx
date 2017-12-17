import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="Panel row">
          <div className="Fixed
            col-md-4
            col-sm-5
            col-xs-5">
            <div class="Title row">
              <div class="col-md-12 text-center">
                <h1>Travel Share</h1>
              </div>
              <div class="col-md-12">
                <h2>Home Icon and Search bar</h2>
              </div>
            </div>
          </div>

          <div className="Dynamic
            col-md-4
            col-sm-5
            col-xs-5">
            <h2>Dynamic Panel -- JS functions</h2>
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
