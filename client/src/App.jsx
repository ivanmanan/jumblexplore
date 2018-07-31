import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import Maps from './Maps';


// Initial Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewSelection: "login",
      loggedIn: false, // Change this to sessionStorage
      username: sessionStorage.getItem('username'),
      user_id: sessionStorage.getItem('user_id'),
      userSearched: ''
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Sidebar name={this.state.name}
                   viewSelection={this.state.viewSelection}/>
        </div>


        <Maps/>

      </div>
    );
  }
}

export default App;