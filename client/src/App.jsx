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
      view: '',
      loggedIn: false,
      username: sessionStorage.getItem('username'),
      user_id: sessionStorage.getItem('user_id'),
      userSearched: ''
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleUserSearch = this.handleUserSearch.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
  }

  componentDidMount() {
    // If logged in, render profile component
    if (sessionStorage.getItem('loggedIn')) {
      this.setState({
        view: "profile",
        loggedIn: true
      });
    }
    else { // Otherwise, render login component
      this.setState({
        view: "view",
        loggedIn: false
      });
    }

  }

  // Parent callback --> View.jsx --> Login.jsx
  login() {
    this.setState({
      view: "profile",
      loggedIn: sessionStorage.getItem('loggedIn'),
      username: sessionStorage.getItem('username'),
      user_id: sessionStorage.getItem('user_id')
    });
  }

  // Parent callback --> View.jsx --> Photos.jsx, Profile.jsx
  logout() {
    this.setState({
      view: 'login',
      loggedIn: false
    })
    sessionStorage.setItem('loggedIn', false);
    sessionStorage.setItem('username', '');
    sessionStorage.setItem('user_id', 0);
    sessionStorage.clear();
  }

  renderProfile() {
    this.setState({
      view: 'profile'
    });
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
            <Navigation handleUserSearch={this.handleUserSearch}
                        loggedIn={this.state.loggedIn}
                        renderProfile={this.renderProfile}/>
          </div>

          <div className="
            col-md-8
            col-sm-7
            col-xs-7">
            <View viewSelection={this.state.view} loggedIn={this.state.loggedIn}
                  login={this.login} logout={this.logout}
                  username={this.state.username}/>
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
