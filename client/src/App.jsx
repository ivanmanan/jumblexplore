import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Maps from './Maps';


// Initial Component
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="row">
          <div className="text-center
            col-md-3 col-md-offset-1
            col-sm-3 col-sm-offset-1
            col-xs-3 col-xs-offset-1">
            <div className="Sidebar">
              <Sidebar/>
            </div>
          </div>
        </div>
            </div>

            <div className="Maps">
              <Maps/>
            </div>
          </div>
    );
  }
}

export default App;