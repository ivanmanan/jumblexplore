import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import Maps from './Maps';


// Initial Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Login Here"
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Sidebar name={this.state.name}/>
        </div>


        <Maps/>

      </div>
    );
  }
}

export default App;