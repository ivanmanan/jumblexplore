import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import Maps from './Maps';


// Initial Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // DEV: Set default view to login
      view: "login",
      loggedIn: false,
      username: sessionStorage.getItem('username'),
      user_id: sessionStorage.getItem('user_id'),
      userSearched: '',
      placeSearch: '',
      mapFocus: [34.0407, -118.2468]
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.placeSearch = this.placeSearch.bind(this);
  }

  componentDidMount() {
    // If logged in, render Account component
    if (sessionStorage.getItem('loggedIn')) {
      this.setState({
        view: "account",
        loggedIn: true
      });
    }
    else { // Otherwise, render Login component
      this.setState({
        view: "login", // DEV: Set this to login
        loggedIn: false
      });
    }
  }

  login() {
    this.setState({
      view: "account",
      loggedIn: sessionStorage.getItem('loggedIn'),
      username: sessionStorage.getItem('username'),
      user_id: sessionStorage.getItem('user_id')
    });
  }

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

  register() {
    this.setState({
      view: 'register'
    });
  }

  // Place.jsx -> Account.jsx -> View.jsx -> Sidebar.jsx -> App.jsx
  // App.jsx   -> Maps.jsx
  placeSearch(query) {
    this.setState({
      placeSearch: query,
      mapFocus: [query[0].y, query[0].x]
    });

  }






  render() {
    return (
      <div className="App">
        <div className="container">
          <Sidebar view={this.state.view}
                   loggedIn={this.state.loggedIn}
                   username={this.state.username}
                   login={this.login} logout={this.logout}
                   register={this.register}
                   placeSearch={this.placeSearch}/>
        </div>
        <Maps mapFocus={this.state.mapFocus}
              placeSearch={this.state.placeSearch}/>
      </div>
    );
  }
}

export default App;