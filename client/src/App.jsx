import React, { Component } from 'react';
import Navigation from './Navigation';
import View from './View';
import Maps from './Maps';

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

    this.handleUserSearch = this.handleUserSearch.bind(this);
  }

  // Render possible usernames
  // This will be sent to backend for SQL query
  handleUserSearch(inputText) {
    this.setState({
      userSearched: inputText
    },() => {
      console.log("Searching for " + this.state.userSearched);
    });
  }

  render() {
    return (
      <div className="App">

        <div className="Panel row">
          <div className="
            col-md-4
            col-sm-5
            col-xs-5">
            <Navigation handleUserSearch={this.handleUserSearch}/>
          </div>

          <div className="
            col-md-8
            col-sm-7
            col-xs-7">
            <View viewSelection={this.state.view}/>
          </div>
        </div>

        <div className="Maps-container row">
          <div className="Maps-container
            col-md-12
            col-sm-12
            col-xs-12">
            <Maps/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
