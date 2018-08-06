import React, { Component } from 'react';

import Sidebar from './sidebar/Sidebar';
import Maps from './map/Maps';

const DEFAULT_PLACE_QUERY = 'Search for a place in the map';

// Initial Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "login",
      loggedIn: false,
      username: sessionStorage.getItem('username'),
      user_id: sessionStorage.getItem('user_id'),
      places: [],
      userSearched: '',
      search: '',
      mapFocus: [37.682056, -121.768051],
      editPlace: DEFAULT_PLACE_QUERY,
      editPlace_id: 0,
      editDate: '',
      editCaption: '',
      mapZoom: 6
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.placeSearch = this.placeSearch.bind(this);
    this.updateCaption = this.updateCaption.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.editPlace = this.editPlace.bind(this);
    this.clearPlace = this.clearPlace.bind(this);
    this.displaySavedPlaces = this.displaySavedPlaces.bind(this);
  }

  // Query that retrieves saved places
  // This will be passed as a prop for the map to display
  displaySavedPlaces() {
    fetch('/place/' + this.state.user_id + '/' + this.state.username, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(res => res.json())
      .then(places => {this.setState({places: places})});
  }

  componentDidMount() {
    // If logged in, render Account component
    if (sessionStorage.getItem('loggedIn')) {

      // Retrieve saved places from database
      this.displaySavedPlaces();

      this.setState({
        view: "account",
        loggedIn: true
      });
    }
    else { // Otherwise, render Login component
      this.setState({
        view: "login", // DEV: Set this to login
        loggedIn: false,
        username: 'ivan',
        user_id: 1
      }, () => {
        this.displaySavedPlaces();
      });
    }
  }

  login() {
    this.setState({
      view: "account",
      loggedIn: sessionStorage.getItem('loggedIn'),
      username: sessionStorage.getItem('username'),
      user_id: sessionStorage.getItem('user_id')
    }, () => {
      // Retrieve saved places from database
      this.displaySavedPlaces();
    });
  }

  logout() {
    this.setState({
      view: 'login',
      loggedIn: false,
      username: 'ivan',
      user_id: 1
    }, () => {
      this.displaySavedPlaces();
    });
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

  placeSearch(query) {
    if (query.length !== 0) {
      this.setState({
        search: query,
        mapFocus: [query[0].y, query[0].x],
        mapZoom: 10
      });
    }
    else {
      this.setState({search: ''});
    }
  }

  updateDate(date) {
    this.setState({editDate: date});
  }

  updateCaption(caption) {
    this.setState({editCaption: caption});
  }

  editPlace(place_name, place_id, date, caption) {
    this.setState({
      editPlace: place_name,
      editPlace_id: place_id,
      editDate: date,
      editCaption: caption
    });
  }

  clearPlace() {
    this.editPlace(DEFAULT_PLACE_QUERY, 0, '', '');
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
                   user_id={this.state.user_id}
                   placeSearch={this.placeSearch}
                   search={this.state.search}
                   editPlace={this.state.editPlace}
                   editPlace_id={this.state.editPlace_id}
                   editDate={this.state.editDate}
                   editCaption={this.state.editCaption}
                   updateDate={this.updateDate}
                   updateCaption={this.updateCaption}
                   clearPlace={this.clearPlace}
                   default_place_query={DEFAULT_PLACE_QUERY}
                   displaySavedPlaces={this.displaySavedPlaces}/>
        </div>
        <Maps mapFocus={this.state.mapFocus}
              mapZoom={this.state.mapZoom}
              username={this.state.username}
              user_id={this.state.user_id}
              placeSearch={this.placeSearch}
              search={this.state.search}
              editPlace={this.editPlace}
              places={this.state.places}
              displaySavedPlaces={this.displaySavedPlaces}/>
      </div>
    );
  }
}

export default App;